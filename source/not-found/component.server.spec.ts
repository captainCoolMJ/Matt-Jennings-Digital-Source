import { notFoundComponent } from './component.server';
import { appConfigurationUnsafeMock } from '../app/configuration-unsafe.mock';
import { appConfigurationMock } from '../app/configuration.mock';
import { AppInternationalizationServiceMock } from '../app/internationalization.service.mock';

describe('notFoundComponent', () => {
  it('should output a string', () => {
    expect(
      typeof notFoundComponent(AppInternationalizationServiceMock())({
        config: appConfigurationUnsafeMock(),
        site: appConfigurationMock(),
      }),
    ).toBe('string');
  });
});
