import { createContext } from 'react';
import { i18nMessagesType } from './types';

export const I18nContext = createContext<i18nMessagesType>({});