/* eslint-disable react/button-has-type */
import React from 'react';
import * as css from './index.css';

type Props = Readonly<{
  children: React.ReactNode;
  form?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
    className={`${css.btn} ${css.btnDefault} ${className}`}
    onClick={onClick}
    disabled={disabled}>
    {children}
  </button>
);
