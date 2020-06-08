import React, { forwardRef } from 'react';
import { FormGroup } from '../form-group';
import { Label } from '../label';
import * as css from './index.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, id, className = '', ...props }, ref) => (
    <FormGroup>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        ref={ref}
        type="text"
        id={id}
        className={`${css.input} ${className}`}
        {...props}
      />
    </FormGroup>
  ),
);
