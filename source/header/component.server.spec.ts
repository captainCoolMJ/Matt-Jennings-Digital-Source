import { headerComponent } from './component.server';
import { AppInternationalizationServiceMock } from '../app/internationalization.service.mock';

describe('headerComponent', () => {
  it('should output a string', () => {
    expect(typeof headerComponent(AppInternationalizationServiceMock())({ title: 'Site title' })).toBe('string');
  });
});
