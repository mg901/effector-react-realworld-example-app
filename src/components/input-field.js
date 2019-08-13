import React from 'react';

export const InputField = ({
  type = 'text',
  value,
  placeholder,
  name,
  onChange,
  onKeyDown,
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
