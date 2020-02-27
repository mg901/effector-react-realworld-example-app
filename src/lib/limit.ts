type LimitFn = (count: number, p?: number) => string;

export const limit: LimitFn = (count, p = 0) =>
  `limit=${count}&offset=${p * count}`;
