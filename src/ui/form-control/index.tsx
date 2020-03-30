import React from 'react';
import { Event } from 'effector';
import './index.css';

export type Props<T> = Readonly<{
  as?: 'input' | 'textarea';
  name: string;
  labelText: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  onChange: T;
}>;

export const FormControl = <T extends Event<any>>({
  as: componentName,
  name,
  labelText,
  placeholder,
  rows,
  className = '',
  onChange,
}: Props<T>): JSX.Element => {
  const input = (
    <input
      name={name}
      className={`form-control ${className}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );

  const textarea = (
    <textarea
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
        {componentName === 'input' ? input : textarea}
      </label>
    </div>
  );
};
