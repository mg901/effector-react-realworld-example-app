import React from 'react';
import RcPagination, { PaginationProps } from 'rc-pagination';
// @ts-ignore
import locale from 'rc-pagination/lib/locale/en_US';
import './index.css';

export const Pagination: React.FC<Readonly<Omit<PaginationProps, 'locale'>>> = (
  props,
) => {
  const { total, pageSize } = props;

  return (
    <>
      {(total as number) > (pageSize as number) && (
        <RcPagination locale={locale} {...props} />
      )}
    </>
  );
};
