import { hydrate } from 'react-dom';
import { storeCreate } from '../helper/store/create';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { appRootStoreGetInitialState } from '../app/root-store/get-initial-state';
import { AppI18nMessageType } from '../app/i18n/types';
import { AppConfigurationType } from '../app/configuration/types';
import { appStart } from '../app/start';
import '../common/style/normalize.css';
import '../app/variables.css';
import './style.css';
import { skillsStoreSubscriber } from '../skills/store/subscriber';
import { portfolioStoreSubscriber } from '../portfolio/store/subscriber';
import { timelineStoreSubscriber } from '../timeline/store/subscriber';

declare global {
    interface Window { 
        __data: {
            s: AppRootStoreStateInterface;
            t: AppI18nMessageType;
            c: AppConfigurationType;
        }; 
    }
}

export const clientEntry = (
    rootElement: HTMLElement, 
    initialState: AppRootStoreStateInterface = appRootStoreGetInitialState(),
    translations: AppI18nMessageType,
    settings: AppConfigurationType,
) => {

    if (!initialState || !translations || !settings) {

        throw new Error('Missing required values');
    }

    const store = storeCreate(initialState);

    portfolioStoreSubscriber(store, settings);
    timelineStoreSubscriber(store, settings);
    skillsStoreSubscriber(store, settings);

    return hydrate(appStart(store, translations, settings), rootElement);
};

if (document.getElementById('root') && window.__data) {

    const { s, t, c } = window.__data;

    clientEntry(document.getElementById('root'), s, t, c);
}