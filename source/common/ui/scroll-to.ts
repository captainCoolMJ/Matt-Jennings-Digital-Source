import { uiEasingFunctions } from './easing/functions';
import { UIEasingTypes } from './easing/types';

export const uiScrollTo = (
  positionY: number,
  options?: Partial<{
    duration: number;
    easing: UIEasingTypes;
  }>,
) => {
  options = {
    duration: 1000,
    easing: 'linear',
    ...options,
  };

  const startPosY = window.pageYOffset;

  let startTime: number;

  requestAnimationFrame(function step(time: number) {
    if (!startTime) {
      startTime = time;
    }

    const timeElapsed = time - startTime;
    const timeElapsedPercent = Math.min(timeElapsed / options.duration, 1);

    window.scrollTo(0, startPosY + positionY * uiEasingFunctions[options.easing](timeElapsedPercent));

    if (timeElapsed < options.duration) {
      requestAnimationFrame(step);
    }
  });
};
