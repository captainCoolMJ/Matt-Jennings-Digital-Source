import { uiScrollIntoView } from './scroll-into-view';
import * as scrollTo from './scroll-to';

describe('uiScrollIntoView', () => {
  const container = document.createElement('div');

  jest.spyOn(scrollTo, 'uiScrollTo');

  it('should call scroll to with the position of the target element', () => {
    uiScrollIntoView(container, {
      easing: 'linear',
      duration: 300,
    });

    expect(scrollTo.uiScrollTo).toHaveBeenCalledWith(container.getBoundingClientRect().top, {
      easing: 'linear',
      duration: 300,
    });
  });
});
