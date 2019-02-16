import { AppDangerousConfigurationType, AppConfigurationType } from '../../app/configuration/types';

export const appConfigurationSanitize = (config: AppDangerousConfigurationType): AppConfigurationType => ({
    apiBaseUrl: config.apiBaseUrl,
    sitename: config.sitename,
    links: config.links,
});