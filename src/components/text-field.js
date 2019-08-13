import React from 'react';

export const TextField = ({
  value,
  rows = '8',
  placeholder,
  name,
  onChange,
}) => (
  <fieldset className="form-group">
    <textarea
      className="form-control"
      rows={rows}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </fieldset>
);
