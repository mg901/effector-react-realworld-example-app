export const limit = (count: number, pageIndex: number): string =>
  `limit=${count}&offset=${pageIndex * count}`;
