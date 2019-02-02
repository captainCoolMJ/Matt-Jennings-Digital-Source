import { i18nMessagesType, i18nMessagesVariablesType } from './types';

export interface I18nInjectPropsInterface<T extends i18nMessagesType = {}> {
    translate: (id: keyof T, variables?: i18nMessagesVariablesType) => string;
}