import React from 'react';
import { Container } from '../../../../ui/container';
import * as css from './index.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Header: React.FC<Props> = ({ className = '', children }) => (
  <header className={`${css.header} ${className}`}>
    <Container className={css.headerInner}>{children}</Container>
  </header>
);
