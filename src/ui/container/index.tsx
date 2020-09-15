import React from 'react';
import * as css from './index.css';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const Container: React.FC<Props> = ({ className = '', children }) => (
  <div className={`${css.container} ${className}`}>{children}</div>
);
