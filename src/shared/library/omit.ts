export const omit = <T extends object, K extends [...(keyof T)[]]>(
  obj: T,
  keys: K,
) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as keyof T)),
  ) as {
    [K2 in Exclude<keyof T, K[number]>]: T[K2];
  };
