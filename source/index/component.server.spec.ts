import { indexComponent } from './component.server';
import { appConfigurationUnsafeMock } from '../app/configuration-unsafe.mock';
import { appConfigurationMock } from '../app/configuration.mock';
import { portfolioItemMock } from '../portfolio/item.mock';
import { skillItemMock } from '../skill/item.mock';

describe('indexComponent', () => {
  it('should output a string', () => {
    expect(
      typeof indexComponent({
        config: appConfigurationUnsafeMock(),
        site: appConfigurationMock(),
        skills: [skillItemMock({})],
        portfolio: [portfolioItemMock({})],
      }),
    ).toBe('string');
  });
});