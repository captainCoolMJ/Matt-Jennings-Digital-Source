import { AppDangerousConfigurationType } from '../../app/configuration/types';
import settings from '../../../configuration/settings.json';

export const appConfigurationCreate = (): AppDangerousConfigurationType => ({
    ...settings,
    apiBaseUrl: process.env.API_BASE_URL,
    sitename: process.env.SITENAME,
    port: parseInt(process.env.PORT, 10),
});