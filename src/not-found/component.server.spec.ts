import { notFoundComponent } from './component.server';
import { appConfigUnsafeMock } from '../app/config-unsafe.mock';
import { appConfigMock } from '../app/config.mock';

describe('notFoundComponent', () => {
  it('should output a string', () => {
    expect(
      typeof notFoundComponent({
        config: appConfigUnsafeMock(),
        site: appConfigMock(),
      }),
    ).toBe('string');
  });
});
