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
import { apiRouter } from './api/router';

const manifest = JSON.parse(fs.readFileSync('./build/manifest.json').toString());
const indexHTML = fs.readFileSync(path.resolve('./build/index.html')).toString();
const configuration = appConfigurationCreate();

const app = express();

app.use(express.static(path.resolve('./build/public/')));
app.use('/api', apiRouter(configuration));
app.use('*', async (req, res) => {

    const store = storeCreate(appRootStoreGetInitialState());
    const sanitizedConfiguration = appConfigurationSanitize(configuration);
    const app = appStart(store, messages, configuration);

    store.setState({
        router: {
            location: {
                pathname: req.originalUrl
            }
        }
    });

    const route = store.getState().router.location;

    if (['/', '/work', '/experience', '/talk'].indexOf(route.pathname) > -1) {

        const promises = [
            new Promise((resolve, reject) => store.subscribe(timelineStoreSuspender(resolve, reject))),
            new Promise((resolve, reject) => store.subscribe(skillsStoreSuspender(resolve, reject))),
            new Promise((resolve, reject) => store.subscribe(portfolioStoreSuspender(resolve, reject)))
        ];

        renderToString(app);

        await Promise.all(promises);
    }

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

app.listen(configuration.port, () => console.log(`App listening on port ${configuration.port}!`));