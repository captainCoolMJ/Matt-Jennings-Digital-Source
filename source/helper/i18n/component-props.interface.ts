import { i18nMessagesType, i18nMessagesVariablesType } from './types';

export interface I18nComponentPropsInterface<M extends i18nMessagesType = {}> {
    id: keyof M;
    variables?: i18nMessagesVariablesType;
    dangerous?: boolean;
}