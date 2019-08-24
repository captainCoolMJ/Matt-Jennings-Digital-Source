import { uiScrollTo } from './scroll-to';

describe('uiScrollTo', () => {
  const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(jest.fn());

  let timestamp = 0;

  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
    timestamp += 100;
    cb(timestamp);
    return timestamp;
  });

  beforeEach(() => {
    scrollToSpy.mockClear();
  });

  it('should scroll the window', () => {
    uiScrollTo(100);
    expect(scrollToSpy).toHaveBeenCalledTimes(11);
  });

  it('should scroll the window with options', () => {
    uiScrollTo(100, {
      duration: 500,
      easing: 'easeInOutQuart',
    });
    expect(scrollToSpy).toHaveBeenCalledTimes(6);
  });
});
