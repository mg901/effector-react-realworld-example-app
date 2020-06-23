/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button } from '..';
import * as css from './index.css';
import { usePages } from './use-pages';
import { Options } from './types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

export const Pagination: React.FC<Options> = (props) => {
  const { total, limit, currentPage } = props;
  const { pages, goToPage, toRight, toLeft } = usePages(props);

  return total <= 0 || total < limit ? null : (
    <nav className="pagination">
      <ul className={css.list}>
        {pages.map((page, idx) => {
          switch (page) {
            case LEFT_PAGE:
              return (
                <li key={idx}>
                  <Button className={css.btn} onClick={() => goToPage(toLeft)}>
                    <span>&laquo;</span>
                  </Button>
                </li>
              );

            case RIGHT_PAGE:
              return (
                <li key={idx}>
                  <Button className={css.btn} onClick={() => goToPage(toRight)}>
                    <span>&raquo;</span>
                  </Button>
                </li>
              );
            default:
              return (
                <li key={idx}>
                  <Button
                    active={page === currentPage}
                    className={css.btn}
                    onClick={() => goToPage(page as number)}>
                    {page}
                  </Button>
                </li>
              );
          }
        })}
      </ul>
    </nav>
  );
};
