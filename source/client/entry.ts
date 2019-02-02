import { hydrate } from 'react-dom';
import { storeCreate } from '../helper/store/create';
import { AppRootStoreStateInterface } from '../app/root-store/state.interface';
import { appRootStoreGetInitialState } from '../app/root-store/get-initial-state';
import { AppI18nMessageType } from '../app/i18n/types';
import { AppConfigurationType } from '../app/configuration/types';
import { appStart } from '../app/start';

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

(window as any).__mjd = (window as any).__mjd || {};

try {

    clientEntry(
        document.getElementById('root'), 
        (window as any).__mjd.s,
        (window as any).__mjd.t,
        (window as any).__mjd.c,
    );
} catch (e) {

    console.error(e);
}