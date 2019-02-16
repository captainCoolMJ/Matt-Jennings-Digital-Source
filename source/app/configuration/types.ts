import { ConfigurationInjectPropsInterface } from '../../helper/configuration/inject-props.interface';
import { AppConfigurationInterface } from '../configuration.interface';

export type AppDangerousConfigurationType = AppConfigurationInterface;

export type AppConfigurationType = Pick<AppConfigurationInterface, 'sitename'|'links'|'apiBaseUrl'>;

export type AppConfigurationInjectPropsType = ConfigurationInjectPropsInterface<AppConfigurationType>;