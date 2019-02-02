import { AppDangerousConfigurationType, AppConfigurationType } from '../../app/configuration/types';

export const appConfigurationSanitize = (config: AppDangerousConfigurationType): AppConfigurationType => ({
    sitename: config.sitename,
    links: config.links,
});