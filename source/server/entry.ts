import express from 'express';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { storeCreate } from '../helper/store/create';
import messages from '../../translations/en.json';
import { appStart } from '../app/start';
import { appConfigurationSanitize } from './app/configuration-sanitize';
import { appConfigurationCreate } from './app/configuration-create';
import { appRootStoreGetInitialState } from '../app/root-store/get-initial-state';
import { skillsStoreSuspender } from '../skills/store/suspender';
import { portfolioStoreSuspender } from '../portfolio/store/suspender';
import { timelineStoreSuspender } from '../timeline/store/suspender';
import firebase from 'firebase';
import { skillsStoreSubscriber } from '../skills/store/subscriber';
import { portfolioStoreSubscriber } from '../portfolio/store/subscriber';
import { timelineStoreSubscriber } from '../timeline/store/subscriber';

const manifest = JSON.parse(fs.readFileSync('./build/manifest.json').toString());
const indexHTML = fs.readFileSync(path.resolve('./build/index.html')).toString();
const configuration = appConfigurationCreate();

const app = express();
const port = configuration.port;

const fb = firebase.initializeApp({
    apiKey: configuration.databaseKey,
    databaseURL: configuration.databaseUrl
});

app.use(express.static(path.resolve('./build/public/')));

app.get('/api/skills', (req, res) => {

    fb.database().ref('/skills').once('value')
        .then((snapshot) => res.status(200).send({
            data: snapshot.val()
        }))
        .catch((err) => res.status(500).send('There was a problem'));
});

app.get('/api/timeline', (req, res) => {

    fb.database().ref('/timeline').once('value')
        .then((snapshot) => res.status(200).send({
            data: snapshot.val()
        }))
        .catch((err) => res.status(500).send('There was a problem'));
});

app.get('/api/portfolio', (req, res) => {

    fb.database().ref('/portfolio').once('value')
        .then((snapshot) => res.status(200).send({
            data: snapshot.val()
        }))
        .catch((err) => res.status(500).send('There was a problem'));
});

app.use('*', async (req, res) => {

    const store = storeCreate(appRootStoreGetInitialState());
    const sanitizedConfiguration = appConfigurationSanitize(configuration);
    const app = appStart(store, messages, configuration);

    skillsStoreSubscriber(store, sanitizedConfiguration);
    portfolioStoreSubscriber(store, sanitizedConfiguration);
    timelineStoreSubscriber(store, sanitizedConfiguration);

    await Promise.all([
        new Promise((resolve, reject) => store.subscribe(timelineStoreSuspender(resolve, reject))),
        new Promise((resolve, reject) => store.subscribe(skillsStoreSuspender(resolve, reject))),
        new Promise((resolve, reject) => store.subscribe(portfolioStoreSuspender(resolve, reject)))
    ]);

    const variables = {
        title: configuration.sitename,
        content: renderToString(app),
        css: manifest['main.css'],
        store: JSON.stringify(store.getState()),
        messages: JSON.stringify(messages),
        configuration: JSON.stringify(sanitizedConfiguration),
    };

    let file = indexHTML;
    Object.keys(variables).forEach((variable) => {
        file = file.replace(`{{${variable}}}`, variables[variable]);
    });
    res.send(file);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));