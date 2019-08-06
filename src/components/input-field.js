import React from 'react';

export const InputFiled = ({
  type = 'text',
  value,
  placeholder,
  name = '',
  onChange,
}) => (
  <fieldset className="form-group">
    <input
      className="form-control form-control-lg"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </fieldset>
);
