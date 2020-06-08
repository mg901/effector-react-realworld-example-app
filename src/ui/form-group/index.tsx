import React from 'react';
import * as css from './index.css';

type Props = {
  children: React.ReactNode;
};

export const FormGroup: React.FC<Props> = ({ children }) => (
  <div className={css.formGroup}>{children}</div>
);
