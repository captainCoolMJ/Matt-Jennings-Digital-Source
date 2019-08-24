import { uiScrollTo } from './scroll-to';
import { UIEasingTypes } from './easing/types';

export const uiScrollIntoView = (
  target: Element,
  options?: {
    duration?: number;
    easing?: UIEasingTypes;
  },
) => {
  uiScrollTo(target.getBoundingClientRect().top, options);
};
