import React from 'react';
import { LinkProps } from 'react-router-dom';
import * as css from './index.css';

type Props = LinkProps & {
  as: React.ComponentType<LinkProps>;
  children: React.ReactNode;
};

export const Link: React.FC<Props> = ({
  as: Component,
  children,
  className = '',
  ...props
}) => (
  <Component className={`${css.link} ${className}`} {...props}>
    {children}
  </Component>
);
