import { RangeFn, Pages, UsePagination } from './types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

export const range: RangeFn = ({ from: i, to, step = 1 }) => {
  const list = [];

  while (i <= to) {
    list.push(i);
    // eslint-disable-next-line no-param-reassign
    i += step;
  }

  return list;
};

export const usePages: UsePagination = ({
  currentPage,
  total,
  limit,
  pageNeighbours: neighbours = 2,
  onChange = (x): number => x,
}) => {
  const pageNeighbours = Math.max(0, Math.min(neighbours, 2));
  const totalPages = Math.ceil(total / limit);
  const toRight = currentPage + pageNeighbours * 2 + 1;
  const toLeft = currentPage - pageNeighbours * 2 - 1;

  const goToPage = (page: number): void => {
    onChange(Math.max(0, Math.min(page, total)));
  };

  const createPagination = (): Pages => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      const pages = range({ from: startPage, to: endPage });

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);
      const makePages = (list: Pages): Pages => [1, ...list, totalPages];

      // handle: (1) < {5 6} [7] {8 9} (10)
      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range({
          from: startPage - spillOffset,
          to: startPage - 1,
        });

        return makePages([LEFT_PAGE, ...extraPages, ...pages]);
      }

      // handle: (1) {2 3} [4] {5 6} > (10)
      if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range({
          from: endPage + 1,
          to: endPage + spillOffset,
        });

        return makePages([...pages, ...extraPages, RIGHT_PAGE]);
      }

      // handle: (1) < {4 5} [6] {7 8} > (10)
      if (hasLeftSpill && hasRightSpill) {
        return makePages([LEFT_PAGE, ...pages, RIGHT_PAGE]);
      }
    }

    console.log('totalPages', totalPages);

    return range({ from: 1, to: totalPages });
  };

  return {
    pages: createPagination(),
    goToPage,
    toRight,
    toLeft,
  };
};
