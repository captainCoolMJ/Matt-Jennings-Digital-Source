import { UIEasingTypes } from './types';

type UIEasingFunction = (t: number) => number;

export const uiEasingFunctions: Record<UIEasingTypes, UIEasingFunction> = {
  easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  linear: (t) => t,
};
