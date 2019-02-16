import { AppDangerousConfigurationType } from '../../app/configuration/types';

export const appConfigurationCreate = (): AppDangerousConfigurationType => ({
    links: {
        github: process.env.LINKS__GITHUB,
        linked_in: process.env.LINKS__LINKED_IN,
        email: process.env.LINKS__EMAIL
    },
    apiBaseUrl: process.env.API_BASE_URL,
    sitename: process.env.SITENAME,
    port: parseInt(process.env.PORT, 10),
    databaseUrl: process.env.DATABASE_URL,
    databaseKey: process.env.DATABASE_KEY
});