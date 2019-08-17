import { uiScrollIntoView } from './scroll-into-view';

describe('uiScrollIntoView', () => {
  const container = document.createElement('div');
  const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(jest.fn());

  let timestamp = 0;

  container.innerHTML = `
    <div id="scroll-to">Me!</div>
  `;

  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
    timestamp += 100;
    cb(timestamp);
    return timestamp;
  });

  beforeEach(() => {
    scrollToSpy.mockClear();
  });

  it('should scroll the window to an element', () => {
    uiScrollIntoView(container.querySelector('#scroll-to'));
    expect(scrollToSpy).toHaveBeenCalledTimes(11);
  });

  it('should scroll the window to an element with options', () => {
    uiScrollIntoView(container.querySelector('#scroll-to'), {
      duration: 500,
      easing: 'easeInOutQuart',
    });
    expect(scrollToSpy).toHaveBeenCalledTimes(6);
  });
});
