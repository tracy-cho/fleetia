const debounce = <F extends (...args: any) => any>(
  func: F,
  waitFor: number
): ((...args: Parameters<F>) => any) => {
  let timer: NodeJS.Timer | null;
  return (...args: Parameters<F>) => {
    if (timer?.hasRef()) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => func?.(args), waitFor);
  };
};

export default debounce;
