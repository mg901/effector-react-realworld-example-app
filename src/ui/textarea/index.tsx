import React, { forwardRef } from 'react';
import * as css from './index.css';
import { FormGroup } from '../form-group';
import { Label } from '../label';

export type TextareaProps = React.TextareaHTMLAttributes<
  HTMLTextAreaElement
> & {
  label?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, className = '', ...props }, ref) => (
    <FormGroup>
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea
        ref={ref}
        className={`${css.textarea} ${className}`}
        {...props}
      />
    </FormGroup>
  ),
);
