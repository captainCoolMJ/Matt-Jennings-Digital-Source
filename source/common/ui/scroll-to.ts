type EasingTypes = 'linear' | 'easeInOutQuart';

const easingMap: Record<EasingTypes, (t: number) => number> = {
  easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
  linear: (t) => t,
};

export const uiScrollTo = (
  positionY: number,
  options?: Partial<{
    duration: number;
    easing: EasingTypes;
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

    window.scrollTo(0, startPosY + positionY * easingMap[options.easing](timeElapsedPercent));

    if (timeElapsed < options.duration) {
      requestAnimationFrame(step);
    }
  });
};
