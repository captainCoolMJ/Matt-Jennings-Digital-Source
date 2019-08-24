import { Internationalization } from '../common/internationalization';
import { AppInternationalizationMessages, AppInternationalizationType } from './types';

const service = new Internationalization<AppInternationalizationMessages>();

export function AppInternationalizationService(): AppInternationalizationType {
  return service;
}
