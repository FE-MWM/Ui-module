const getRandomSeconds = (): number =>
  (Math.round(Math.random() * 5) + 1) * 250;

export const randomTimer =
  <T>(func: (...args: any[]) => T, ...args: any[]) =>
  (resolve: (value: T | PromiseLike<T>) => void): void => {
    setTimeout(() => resolve(func(...args)), getRandomSeconds());
  };

export const dummyFetcher = <T>(
  method: (...args: any[]) => T,
  ...args: any[]
): Promise<T> => new Promise(randomTimer(method, ...args));
