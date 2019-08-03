import { indexComponent } from './component.server';
import { appConfigUnsafeMock } from '../app/config-unsafe.mock';
import { appConfigMock } from '../app/config.mock';
import { portfolioItemMock } from '../portfolio/item.mock';
import { skillItemMock } from '../skill/item.mock';

describe('indexComponent', () => {
  it('should output a string', () => {
    expect(
      typeof indexComponent({
        config: appConfigUnsafeMock(),
        site: appConfigMock(),
        skills: [skillItemMock({})],
        portfolio: [portfolioItemMock({})],
      }),
    ).toBe('string');
  });
});
