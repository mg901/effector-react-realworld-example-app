/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable react/button-has-type */
import React from 'react';
import './index.css';

type Props = Readonly<{
  children: React.ReactNode;
  form?: string;
  type?: 'button' | 'submit' | 'reset';
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
      onClick();
    }}
    disabled={disabled}>
    {children}
  </button>
);
