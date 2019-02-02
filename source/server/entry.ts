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

const configuration = appConfigurationCreate();

const app = express();
const port = configuration.port;

app.use(express.static(path.resolve('./build/public/')));
app.use('*', (req, res) => {

    let file = fs.readFileSync(path.resolve('./build/index.html')).toString();

    // const promises = [];

    // const promiseService = {
    //     add: (id: string, promise: Promise<void>) => {

    //         const promiseExists = promises.some((p) => p.id === id);

    //         if (promiseExists) {

    //             return;
    //         }

    //         const newPromise = {
    //             id: id,
    //             promise: promise,
    //             status: 'unfulfilled',
    //         };

    //         promises.push(newPromise);
    //     },
    //     remove: (promise: Promise<void>) => {

    //         promises.splice(promises.indexOf(promise, 1));
    //     }
    // }
    const store = storeCreate(appRootStoreGetInitialState());

    // renderToString(<AppComponent store={store} promises={promiseService} />);

    // - Use react router 'match' to find all components
    // - Filter those matched components to see the ones which have async functions
    // - Add them to a queue
    // - Execute all the promises in the queue
    // - After promises resolve, render content to string

    // Promise.all(promises.map((p) => p.promise)).then(() => {

    const variables = {
        title: configuration.sitename,
        content: renderToString(appStart(store, messages, configuration)),
        base: configuration.window_keys.base,
        store: `${configuration.window_keys.state}: ${JSON.stringify(store.getState())}`,
        messages: `${configuration.window_keys.translations}: ${JSON.stringify(messages)}`,
        configuration: `${configuration.window_keys.configuration}: ${JSON.stringify(appConfigurationSanitize(configuration))}`,
    };

    Object.keys(variables).forEach((variable) => {
        file = file.replace(`{{${variable}}}`, variables[variable]);
    });

    res.send(file);
    // });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));