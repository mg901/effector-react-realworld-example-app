import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../button';
import * as css from './index.css';

export const Tag = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <span className={css.tag}>
      <span className="text">{children}</span>
      <Button ref={ref} {...props}>
        x
      </Button>
    </span>
  ),
);
