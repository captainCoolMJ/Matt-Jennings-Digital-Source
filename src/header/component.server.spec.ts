import { headerComponent } from './component.server';

describe('headerComponent', () => {
  it('should output a string', () => {
    expect(typeof headerComponent({ title: 'Site title' })).toBe('string');
  });
});
