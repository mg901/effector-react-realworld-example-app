export const limit = (count: number, p: number): string =>
  `limit=${count}&offset=${(p - 1) * count}`;
