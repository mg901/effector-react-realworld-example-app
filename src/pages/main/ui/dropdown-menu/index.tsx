import React, { forwardRef } from 'react';
import * as css from './index.css';

type Props = Readonly<{
  show: boolean;
  children: React.ReactNode;
}>;

export const DownDownMenu = forwardRef<HTMLUListElement, Props>(
  ({ show, children }, ref) => (
    <ul ref={ref} className={css.dropdownMenu} data-active={show}>
      {children}
    </ul>
  ),
);

DownDownMenu.displayName = 'DownDownMenu';
