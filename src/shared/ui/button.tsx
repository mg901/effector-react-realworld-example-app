/* eslint-disable react/button-has-type */
import { memo, forwardRef } from 'react';
import clsx from 'clsx';

export type ButtonProps = Readonly<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'sm' | 'lg';
  }
>;

// prettier-ignore
export const Button = memo(forwardRef<HTMLButtonElement, ButtonProps>(
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
));

Button.displayName = 'Button';
