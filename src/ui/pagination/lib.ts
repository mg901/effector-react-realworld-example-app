type Args = Readonly<{
  from: number;
  to: number;
  step?: number;
}>;

type RangeFn = (x: Args) => readonly number[];

export const range: RangeFn = ({ from: i, to, step = 1 }) => {
  const list = [];

  while (i <= to) {
    list.push(i);
    // eslint-disable-next-line no-param-reassign
    i += step;
  }

  return list;
};
