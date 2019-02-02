import { AppDangerousConfigurationType } from '../../app/configuration/types';
import settings from '../../../configuration/settings.json';

export const appConfigurationCreate = (): AppDangerousConfigurationType => ({
    ...settings,
    sitename: process.env.SITENAME,
    port: parseInt(process.env.PORT, 10),
});