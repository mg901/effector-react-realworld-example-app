/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NavLinkProps } from 'react-router-dom';
import * as css from './index.css';

type Props = NavLinkProps & {
  as: React.ComponentType<NavLinkProps>;
};

export const NavLink: React.FC<Props> = ({
  as: Component,
  children,
  ...props
}) => (
  <Component className={css.link} {...props}>
    {children}
  </Component>
);
