export const targetValue = (e) => e.currentTarget.value;

export const decompose = (store, shape) =>
  Object.keys(shape).reduce(
    (acc, key) => ({
      ...acc,
      [key]: store.map(shape[key]),
    }),
    {},
  );
