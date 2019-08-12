import { appComponent } from './component.server';
import { appConfigurationMock } from './configuration.mock';
import { appConfigurationUnsafeMock } from './configuration-unsafe.mock';

describe('appComponent', () => {
  it('should output a string', () => {
    expect(
      typeof appComponent(
        {
          config: appConfigurationUnsafeMock(),
          site: appConfigurationMock(),
        },
        {
          head: '',
          body: '',
          foot: '',
        },
      ),
    ).toBe('string');
  });
});
