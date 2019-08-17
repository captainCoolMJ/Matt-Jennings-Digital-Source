import { timingDelay } from './delay';

jest.useFakeTimers();

describe('delay', () => {
  it('should call a function after waiting the inputted number of ms', () => {
    const fn = jest.fn();
    timingDelay(fn, 1000);
    jest.advanceTimersByTime(1000);
    expect(fn).toHaveBeenCalled();
  });

  it('should not call the delay function if it has been cleared', () => {
    const fn = jest.fn();
    const delay = timingDelay(fn, 100);
    delay.clear();
    jest.advanceTimersByTime(1000);
    expect(fn).not.toHaveBeenCalled();
  });
});
