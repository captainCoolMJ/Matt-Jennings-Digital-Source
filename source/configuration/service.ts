import { ConfigurationSettingsInterface } from './settings.interface';

export const ConfigurationService = (): ConfigurationSettingsInterface => ({
    gtmId: process.env.GTM_ID,
    port: parseInt(process.env.PORT, 10)
});