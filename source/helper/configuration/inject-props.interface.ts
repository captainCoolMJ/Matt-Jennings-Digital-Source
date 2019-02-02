import { ConfigurationType } from './types';

export interface ConfigurationInjectPropsInterface<T extends ConfigurationType = {}> {
    configuration: T;
}