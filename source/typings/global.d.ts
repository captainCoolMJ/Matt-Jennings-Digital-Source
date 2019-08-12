import { AppConfigurationInterface } from '../app/configuration.interface';

declare global {
  interface Window {
    __mjd: {
      api: AppConfigurationInterface['api'];
    };
  }
}
