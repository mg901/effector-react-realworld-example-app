export const limit = (count: number, p = 0): string =>
  `limit=${count}&offset=${p * count}`;
