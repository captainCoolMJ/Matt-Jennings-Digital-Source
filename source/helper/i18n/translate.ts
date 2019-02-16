import { i18nMessagesType, i18nMessagesVariablesType } from './types';

export const i18nTranslate = <T extends i18nMessagesType>(
    messages: T,
    id: keyof T, 
    variables: i18nMessagesVariablesType = {},
) => {

    let message: string = messages[id];

    Object.keys(variables).forEach((variable) => {
        const arg = new RegExp(`{${variable}}`, 'gi')
        message = message.replace(arg, variables[variable]);
    });

    return message;
}