export interface AppConfigurationInterface {
    sitename: string;
    apiBaseUrl: string;
    links: {
        github: string;
        linked_in: string;
        email: string;
    };
    port: number;
    databaseUrl: string;
    databaseKey: string;
}