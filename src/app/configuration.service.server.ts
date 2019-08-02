import { AppConfiguration } from './configuration.server';

const config = new AppConfiguration();

export function AppConfigurationService(): AppConfiguration {
  return config;
}
