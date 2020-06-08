import React, { forwardRef } from 'react';
import { FormGroup } from '../form-group';
import * as css from './index.css';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, id, className = '', ...props }, ref) => (
    <FormGroup>
      {label && <label htmlFor={id}>{label}</label>}
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
