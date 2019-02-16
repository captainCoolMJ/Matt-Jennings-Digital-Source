import React from 'react';
import { AppRootStoreStateInterface } from './root-store/state.interface';
import { StoreType } from '../helper/store/types';
import { AppConfigurationType } from './configuration/types';
import { AppI18nMessageType } from './i18n/types';
import { StoreContext } from '../helper/store/context';
import { I18nContext } from '../helper/i18n/context';
import { ConfigurationContext } from '../helper/configuration/context';
import { AppContainer } from './container';

export const appStart = (
    store: StoreType<AppRootStoreStateInterface>,
    translations: AppI18nMessageType,
    settings: AppConfigurationType
) => (
    <StoreContext.Provider value={store}>
        <I18nContext.Provider value={translations}>
            <ConfigurationContext.Provider value={settings}>
                <AppContainer />
            </ConfigurationContext.Provider>
        </I18nContext.Provider>
    </StoreContext.Provider>
);