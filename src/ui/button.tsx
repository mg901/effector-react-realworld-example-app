/* eslint-disable react/button-has-type */
import React, { forwardRef } from 'react';

export type ButtonProps = Readonly<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', className = '', children, ...props }, ref) => (
    <button ref={ref} type={type} className={`btn  ${className}`} {...props}>
      {children}
    </button>
  ),
);
