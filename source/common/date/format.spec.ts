import { dateFormat } from './format';

describe('dateFormat', () => {
  it('should parse a date like string and output date information', () => {
    expect(dateFormat('1 february 2018')).toEqual({
      ms: expect.any(Number),
      formatted: 'Feb 2018',
    });
  });
});
