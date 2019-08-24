import { AppInternationalizationService } from './internationalization.service';
import { AppInternationalizationType } from './types';

const service = AppInternationalizationService();

service.initialize('en-US', {} as any);

export function AppInternationalizationServiceMock(): AppInternationalizationType {
  return service;
}
