import { footerComponent } from './component.server';

describe('footerComponent', () => {
  it('should output a string', () => {
    expect(typeof footerComponent({ title: 'Site title' })).toBe('string');
  });
});
