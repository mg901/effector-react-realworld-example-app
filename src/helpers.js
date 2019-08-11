export const limit = (count, p = 0) => `limit=${count}&offset=${p * count}`;
