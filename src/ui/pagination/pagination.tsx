/* eslint-disable react/no-array-index-key */
import React from 'react';
import { range } from './lib';
import { Item } from './item';
import './index.css';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

type Pagination = readonly (string | number)[];

type Props = Readonly<{
  currentPage: number;
  total: number;
  limit: number;
  pageNeighbours: number;
  onChange: (x: number) => number;
}>;

export const Pagination: React.FC<Props> = ({
  currentPage,
  total,
  limit,
  pageNeighbours: neighbours,
  onChange,
}) => {
  const pageNeighbours = Math.max(0, Math.min(neighbours, 2));
  const totalPages = Math.ceil(total / limit);
  const toRight = currentPage + pageNeighbours * 2 + 1;
  const toLeft = currentPage - pageNeighbours * 2 - 1;

  const gotoPage = (page: number): void => {
    onChange(Math.max(0, Math.min(page, total)));
  };

  const createPagination = (): Pagination => {
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
      const makePages = (list: Pagination): Pagination => [
        1,
        ...list,
        totalPages,
      ];

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

    return range({ from: 1, to: totalPages });
  };

  return total <= 0 || total < limit ? null : (
    <nav className="pagination">
      <ul className="pagination__list">
        {createPagination().map((page, idx) => {
          switch (page) {
            case LEFT_PAGE:
              return (
                <Item key={idx} onClick={(): void => gotoPage(toLeft)}>
                  <span>&laquo;</span>
                </Item>
              );

            case RIGHT_PAGE:
              return (
                <Item key={idx} onClick={(): void => gotoPage(toRight)}>
                  <span>&raquo;</span>
                </Item>
              );
            default:
              return (
                <Item
                  key={idx}
                  dataActive={page === currentPage}
                  onClick={(): void => gotoPage(page as number)}>
                  {page}
                </Item>
              );
          }
        })}
      </ul>
    </nav>
  );
};
