/* eslint-disable react/button-has-type */
import React, { forwardRef } from 'react';
import * as css from './index.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: React.ComponentType<any>;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as: Component = 'button',
      variant,
      size,
      active,
      type = 'button',
      className = '',
      children,
      ...props
    },
    ref,
  ) => {
    if ('to' in props) {
      return (
        <Component
          ref={ref}
          data-active={active}
          data-variant={variant}
          data-size={size}
          className={`${css.btn} ${css.btnDefault} ${className}`}
          {...props}>
          {children}
        </Component>
      );
    }

    return (
      <Component
        ref={ref}
        data-active={active}
        data-variant={variant}
        data-size={size}
        type={type}
        className={`${css.btn} ${css.btnDefault} ${className}`}
        {...props}>
        {children}
      </Component>
    );
  },
);
