/* eslint-disable react/button-has-type */
import React from 'react';
import './index.css';

type Props = Readonly<{
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}>;

export const Button: React.FC<Props> = ({
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  children,
}) => (
  <button
    type={type}
    className={`btn ${className}`}
    onClick={onClick}
    disabled={disabled}>
    {children}
  </button>
);
