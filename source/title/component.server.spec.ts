import { titleComponent } from './component.server';

describe('titleComponent', () => {
  it('should output a string', () => {
    expect(
      typeof titleComponent({
        priority: 1,
        content: '',
        variants: [],
      }),
    ).toBe('string');

    expect(
      typeof titleComponent({
        priority: 1,
        content: '',
      }),
    ).toBe('string');
  });
});
