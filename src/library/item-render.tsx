import React from 'react';
import { Link } from 'react-router-dom';
import { PaginationProps } from 'rc-pagination';

type ItemRender = (path: string) => PaginationProps['itemRender'];

export const itemRender: ItemRender = (path) => (current, type, element) =>
  type !== 'page' ? (
    element
  ) : (
    <Link to={`${path}?page=${current}`}>{current}</Link>
  );
