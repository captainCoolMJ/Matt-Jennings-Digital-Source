import { indexEntry } from './entry';
import { indexComponent } from './component.server';
import { AppConfigurationService } from '../app/configuration.service.server';
import { AppInternationalizationServiceMock } from '../app/internationalization.service.mock';

describe('indexEntry', () => {
  it('should initialize index', () => {
    document.documentElement.innerHTML = indexComponent(AppInternationalizationServiceMock())({
      config: AppConfigurationService().getUnsafe(),
      site: AppConfigurationService().get(),
      skills: [],
      portfolio: [],
      timeline: [],
    });

    expect(indexEntry(document)).toBeUndefined();
  });
});
