import React from 'react';
import * as css from './index.css';

type Props = React.FormHTMLAttributes<HTMLFormElement>;

export const Form: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => (
  <form className={`${css.form} ${className}`} {...props}>
    {children}
  </form>
);
