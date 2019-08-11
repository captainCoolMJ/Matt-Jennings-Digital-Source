import { appComponent } from './component.server';
import { appConfigMock } from './config.mock';
import { appConfigUnsafeMock } from './config-unsafe.mock';

describe('appComponent', () => {
  it('should output a string', () => {
    expect(
      typeof appComponent(
        {
          config: appConfigUnsafeMock(),
          site: appConfigMock(),
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
