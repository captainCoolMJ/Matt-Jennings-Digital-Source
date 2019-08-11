import { indexEntry } from './entry';
import { indexComponent } from './component.server';
import { AppConfigurationService } from '../app/configuration.service.server';

describe('indexEntry', () => {
  it('should initialize index', () => {
    document.documentElement.innerHTML = indexComponent({
      config: AppConfigurationService().getUnsafe(),
      site: AppConfigurationService().get(),
      skills: [],
      portfolio: [],
    });

    expect(indexEntry(document)).toBeUndefined();
  });
});
