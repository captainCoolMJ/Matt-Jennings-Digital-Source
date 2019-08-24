import { AppConfigurationInterface } from '../app/configuration.interface';
import { AppInternationalizationMessages } from '../app/types';

declare global {
  interface Window {
    __mjd: {
      api: AppConfigurationInterface['api'];
      messages: AppInternationalizationMessages;
    };
  }
}
