export type RangeFn = (x: {
  from: number;
  to: number;
  step?: number;
}) => readonly number[];

export type Pages = readonly (string | number)[];

export type Options = Readonly<{
  currentPage: number;
  total: number;
  limit: number;
  pageNeighbours?: number;
  onChange: (x: number) => number;
}>;

export type UsePagination = (
  x: Options,
) => {
  pages: Pages;
  goToPage: (page: number) => void;
  toRight: number;
  toLeft: number;
};
