import React from 'react';
import { Event } from 'effector';
import { ChangeEvent } from '../../types';
import './index.css';

type Props = Readonly<{
  type?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  onKeyDown?: Event<React.KeyboardEvent<HTMLInputElement>>;
  onChange: Event<ChangeEvent>;
}>;

export const InputField: React.FC<Props> = ({
  type = 'text',
  value,
  placeholder,
  name,
  onKeyDown,
  onChange,
}) => (
  <fieldset className="form-control__wrap">
    <input
      className="form-control"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  </fieldset>
);
