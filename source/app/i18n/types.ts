import messages from '../../../translations/en.json';
import { I18nInjectPropsInterface } from '../../helper/i18n/inject-props.interface.js';

export type AppI18nMessageType = typeof messages;

export type AppI18nInjectPropsType = I18nInjectPropsInterface<AppI18nMessageType>;