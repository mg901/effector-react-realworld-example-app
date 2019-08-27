import React from 'react';
import './index.css';

export const InputField = ({
  type = 'text',
  value,
  placeholder,
  name,
  onChange,
  onKeyDown,
  autoComplete,
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
      autoComplete={autoComplete}
    />
  </fieldset>
);
