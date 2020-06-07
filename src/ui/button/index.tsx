/* eslint-disable react/button-has-type */
import React, { forwardRef } from 'react';
import * as css from './index.css';

type Props = {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      variant,
      size,
      form,
      type = 'button',
      disabled,
      className = '',
      children,
      onClick,
    },
    ref,
  ) => (
    <button
      ref={ref}
      data-variant={variant}
      data-size={size}
      form={form}
      type={type}
      className={`${css.btn} ${css.btnDefault} ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  ),
);
