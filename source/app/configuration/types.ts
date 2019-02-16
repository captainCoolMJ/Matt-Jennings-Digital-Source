import configuration from '../../../configuration/settings.json';
import { ConfigurationInjectPropsInterface } from '../../helper/configuration/inject-props.interface.js';

export type AppDangerousConfigurationType = typeof configuration;

export type AppConfigurationType = Pick<AppDangerousConfigurationType, 'sitename'|'links'|'apiBaseUrl'>;

export type AppConfigurationInjectPropsType = ConfigurationInjectPropsInterface<AppConfigurationType>;