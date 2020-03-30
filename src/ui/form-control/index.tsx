import React from 'react';
import { Event } from 'effector';
import './index.css';

export type Props<T> = Readonly<{
  name: string;
  labelText: string;
  as?: 'input' | 'textarea';
  value?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  onChange: T;
}>;

export const FormControl = <T extends Event<any>>({
  as = 'input',
  value,
  name,
  labelText,
  placeholder,
  rows,
  className = '',
  onChange,
}: Props<T>): JSX.Element => {
  const input = (
    <input
      value={value}
      name={name}
      className={`form-control ${className}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );

  const textarea = (
    <textarea
      value={value}
      name={name}
      rows={rows}
      className={`form-control ${className}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );

  return (
    <div className="form-group">
      <label htmlFor={name}>
        <div>{labelText}</div>
        {as === 'input' ? input : textarea}
      </label>
    </div>
  );
};
