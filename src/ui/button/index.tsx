/* eslint-disable react/button-has-type */
import React from 'react';
import './index.css';

type Props = Readonly<{
  children: React.ReactNode;
  form?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  disabled?: boolean;
  onClick?: Function;
}>;

export const Button: React.FC<Props> = ({
  form,
  type = 'button',
  className = '',
  disabled = false,
  children,
  onClick,
}) => (
  <button
    form={form}
    type={type}
    className={`btn ${className}`}
    onClick={(): void => {
      if (onClick) {
        onClick();
      }
    }}
    disabled={disabled}>
    {children}
  </button>
);
