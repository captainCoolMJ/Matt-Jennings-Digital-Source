import { createContext } from 'react';
import { ConfigurationType } from './types';

export const ConfigurationContext = createContext<ConfigurationType>({});