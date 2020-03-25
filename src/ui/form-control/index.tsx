import React from 'react';
import { Event } from 'effector';
import { ChangeEvent } from '../../types';

type Props = Readonly<{
  as?: React.ElementType;
  type?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  rows?: number;
  onChange: Event<ChangeEvent>;
  onKeyDown?: Event<React.KeyboardEvent<HTMLInputElement>>;
}>;

export const FormControl: React.FC<Props> = ({
  as: Component = 'input',
  type = 'text',
  value,
  rows = 8,
  placeholder,
  name,
  onChange,
  onKeyDown,
}) => {
  const input = (
    <Component
      className="form-control"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );

  const textarea = (
    <Component
      className="form-control"
      rows={rows}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

  return (
    <div className="form-control__wrap">
      {Component === 'textarea' ? textarea : input}
    </div>
  );
};
