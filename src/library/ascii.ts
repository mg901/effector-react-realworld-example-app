export const removeNotASCII = (x: string): string =>
  x.replace(/[^x00-\x7F]/g, '');

export const isASCII = (x: string): boolean => /^[x00-\x7F]*$/.test(x);
