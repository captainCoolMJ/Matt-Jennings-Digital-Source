import { dateFormat } from './format';

describe('dateFormat', () => {
  it('should parse a date like string and output date information', () => {
    expect(dateFormat('february 2018')).toEqual({
      ms: 1517428800000,
      formatted: 'Feb 2018',
    });
  });
});
