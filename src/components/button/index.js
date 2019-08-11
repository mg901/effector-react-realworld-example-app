/* eslint-disable react/button-has-type */
import React from 'react';

export const Button = ({
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
