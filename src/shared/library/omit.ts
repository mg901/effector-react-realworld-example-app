export const omit = <T extends object, K extends [...(keyof T)[]]>(
  obj: T,
  keys: K,
) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as keyof T)),
  ) as {
    [P in Exclude<keyof T, K>]: T[P];
  };
