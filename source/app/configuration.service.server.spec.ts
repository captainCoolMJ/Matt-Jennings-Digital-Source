import { AppConfigurationService } from './configuration.service.server';

describe('AppConfigurationService', () => {
  it('should return the app configuration as a singleton', () => {
    expect(AppConfigurationService()).toStrictEqual(AppConfigurationService());
  });
});
