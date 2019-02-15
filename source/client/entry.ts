import { hydrate } from 'react-dom';
import { storeCreate } from '../helper/store/create';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { appRootStoreGetInitialState } from '../app/root-store/get-initial-state';
import { AppI18nMessageType } from '../app/i18n/types';
import { AppConfigurationType } from '../app/configuration/types';
import { appStart } from '../app/start';

declare global {
    interface Window { 
        __mjd: {
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

    return hydrate(appStart(store, translations, settings), rootElement);
};

if (document.getElementById('root') && window.__mjd) {

    const { s, t, c } = window.__mjd;
    
    clientEntry(document.getElementById('root'), s, t, c);
}