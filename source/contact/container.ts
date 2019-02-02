import { ContactComponent } from './component';
import { i18nInject } from '../helper/i18n/inject';
import { configurationInject } from '../helper/configuration/inject';

export const ContactContainer = configurationInject(i18nInject(ContactComponent));