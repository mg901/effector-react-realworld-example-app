import React from 'react';
import * as css from './index.css';

type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => (
  <div className={css.container}>{children}</div>
);
