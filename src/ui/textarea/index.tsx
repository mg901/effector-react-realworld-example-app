import React, { forwardRef } from 'react';
import { FormGroup } from '../form-group';
import { Label } from '../label';
import * as css from './index.css';

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
