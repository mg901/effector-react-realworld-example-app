/* eslint-disable react/button-has-type */
import { forwardRef } from 'react';
import clsx from 'clsx';

export type ButtonProps = Readonly<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'sm' | 'lg';
  }
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', size = '', className = '', children, ...props }, ref) => {
    const btnClasses = clsx('btn', {
      'btn-sm': size === 'sm',
      'btn-lg': size === 'lg',
    });

    return (
      <button
        className={`${btnClasses} ${className}`}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  },
);
