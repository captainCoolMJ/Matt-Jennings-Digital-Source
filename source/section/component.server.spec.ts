import { sectionComponent } from './component.server';

describe('sectionComponent', () => {
  it('should output a string', () => {
    expect(
      typeof sectionComponent({
        id: 'test',
        content: '',
      }),
    ).toBe('string');

    expect(
      typeof sectionComponent({
        id: 'test',
        content: '',
        variants: ['noBorder'],
      }),
    ).toBe('string');

    expect(
      typeof sectionComponent({
        id: 'test',
        content: '',
        variants: [],
      }),
    ).toBe('string');
  });
});
