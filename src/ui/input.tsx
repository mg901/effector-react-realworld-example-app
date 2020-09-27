import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  type = 'text',
  className = '',
  ...props
}) => <input className={`form-control ${className}`} type={type} {...props} />;
