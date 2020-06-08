import React, { forwardRef } from 'react';
import * as css from './index.css';
import { FormGroup } from '../form-group';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, id, className = '', ...props }, ref) => (
    <FormGroup>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        ref={ref}
        className={`${css.textarea} ${className}`}
        {...props}
      />
    </FormGroup>
  ),
);
