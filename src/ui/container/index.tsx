import React from 'react';
import * as css from './index.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = ({ className = '', children }) => (
  <div className={`${css.container} ${className}`}>{children}</div>
);
