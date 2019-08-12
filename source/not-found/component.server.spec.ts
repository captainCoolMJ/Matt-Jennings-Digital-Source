import { notFoundComponent } from './component.server';
import { appConfigurationUnsafeMock } from '../app/configuration-unsafe.mock';
import { appConfigurationMock } from '../app/configuration.mock';

describe('notFoundComponent', () => {
  it('should output a string', () => {
    expect(
      typeof notFoundComponent({
        config: appConfigurationUnsafeMock(),
        site: appConfigurationMock(),
      }),
    ).toBe('string');
  });
});
