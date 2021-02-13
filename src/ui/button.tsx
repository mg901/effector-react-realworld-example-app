/* eslint-disable react/button-has-type */
import { forwardRef } from 'react';

export type ButtonProps = Readonly<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', className = '', children, ...props }, ref) => (
    <button className={`btn  ${className}`} ref={ref} type={type} {...props}>
      {children}
    </button>
  ),
);
