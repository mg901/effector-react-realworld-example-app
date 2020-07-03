import React from 'react';
import { Button, ButtonProps } from '../button';
import * as css from './index.css';

export const Tag: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button className={css.tag} {...props}>
    {children}
  </Button>
);
