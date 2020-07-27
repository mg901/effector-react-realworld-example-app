import React, { forwardRef } from 'react';
import { FormGroup } from '../form-group';
import { Label } from '../label';
import * as css from './index.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = 'text', id, className = '', ...props }, ref) => (
    <FormGroup>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        ref={ref}
        type={type}
        id={id}
        className={`${css.input} ${className}`}
        {...props}
      />
    </FormGroup>
  ),
);
