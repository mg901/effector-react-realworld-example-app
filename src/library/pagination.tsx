import React from 'react';
import { PaginationProps } from 'rc-pagination';
import { Link } from 'react-router-dom';

type ItemRender = (path: string) => PaginationProps['itemRender'];

export const feedItemRender: ItemRender = (path) => (current, type, element) =>
  type !== 'page' ? (
    element
  ) : (
    <Link className="link" to={`${path}?page=${current}`}>
      {current}
    </Link>
  );
