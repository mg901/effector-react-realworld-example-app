export const limit = (count: number, pageIndex = 0): string =>
  `limit=${count}&offset=${pageIndex * count}`;
