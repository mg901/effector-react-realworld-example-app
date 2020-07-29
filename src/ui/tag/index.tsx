import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../button';
import * as css from './index.css';

export const Tag = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <Button ref={ref} className={css.tag} {...props}>
      {children}
    </Button>
  ),
);
