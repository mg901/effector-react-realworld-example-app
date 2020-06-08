/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import * as css from './index.css';

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label: React.FC<Props> = ({
  className = '',
  children,
  ...props
}) => (
  <label className={`${css.label} ${className}`} {...props}>
    {children}
  </label>
);
