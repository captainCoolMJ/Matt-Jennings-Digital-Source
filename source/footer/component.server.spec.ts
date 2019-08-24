import { footerComponent } from './component.server';
import { AppInternationalizationServiceMock } from '../app/internationalization.service.mock';

describe('footerComponent', () => {
  it('should output a string', () => {
    expect(typeof footerComponent(AppInternationalizationServiceMock())({ title: 'Site title' })).toBe('string');
  });
});
