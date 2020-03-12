import React from 'react';
import { Event } from 'effector';

type Props = Readonly<{
  type?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  onKeyDown?: () => void;
  onChange: Event<React.ChangeEvent<HTMLInputElement>>;
}>;

export const InputField: React.FC<Props> = ({
  type = 'text',
  value,
  placeholder,
  name,
  onKeyDown,
  onChange,
}) => (
  <fieldset className="form-group">
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
