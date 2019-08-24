import { navigationComponent } from './component.server';
import { AppInternationalizationServiceMock } from '../app/internationalization.service.mock';

describe('navigationComponent', () => {
  it('should output a string', () => {
    expect(typeof navigationComponent(AppInternationalizationServiceMock())({ links: [] })).toBe('string');
  });
});
