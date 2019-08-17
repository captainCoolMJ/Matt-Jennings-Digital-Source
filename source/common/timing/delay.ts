export const timingDelay = (fn: () => void, ms: number) => {
  const timeout = setTimeout(() => fn(), ms);

  return {
    clear: () => clearTimeout(timeout),
  };
};
