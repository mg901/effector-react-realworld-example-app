/* eslint-disable react/button-has-type */
import React, { forwardRef } from 'react';
import * as css from './index.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { variant, size, type = 'button', className = '', children, ...props },
    ref,
  ) => (
    <button
      ref={ref}
      data-variant={variant}
      data-size={size}
      type={type}
      className={`${css.btn} ${css.btnDefault} ${className}`}
      {...props}>
      {children}
    </button>
  ),
);
