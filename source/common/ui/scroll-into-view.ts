import { uiScrollTo } from './scroll-to';

type EasingTypes = 'linear' | 'easeInOutQuart';

export const uiScrollIntoView = (
  target: Element,
  options?: {
    duration?: number;
    easing?: EasingTypes;
  },
) => {
  uiScrollTo(target.getBoundingClientRect().top, options);
};
