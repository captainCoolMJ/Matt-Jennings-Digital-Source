import { AppComponent } from './component';
import { i18nInject } from '../helper/i18n/inject';
import { configurationInject } from '../helper/configuration/inject';

export const AppContainer = configurationInject(i18nInject(AppComponent));