export const limit = (count, p = 0) => `limit=${count}&offset=${p * count}`;

export const uniq = (x) => [...new Set(x)];
