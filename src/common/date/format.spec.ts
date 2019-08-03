import { dateFormat } from './format';

describe('dateFormat', () => {
  it('should parse a date like string and output date information', () => {
    expect(dateFormat('1 february 2018')).toEqual({
      ms: 1517428800000,
      formatted: 'Feb 2018',
    });
  });
});
