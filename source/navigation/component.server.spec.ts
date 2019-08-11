import { navigationComponent } from './component.server';

describe('navigationComponent', () => {
  it('should output a string', () => {
    expect(typeof navigationComponent({ links: [] })).toBe('string');
  });
});
