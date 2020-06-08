import React from 'react';
import * as css from './index.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const FormGroup: React.FC<Props> = ({ className = '', children }) => (
  <div className={`${css.formGroup} ${className}`}>{children}</div>
);
