type UniqFn = <T>(x: T[] | readonly T[]) => T[] | readonly T[];

export const uniq: UniqFn = (x) => Array.from(new Set(x));
