import React from 'react';

export const TextField = ({ value, rows = '8', placeholder, onChange }) => (
  <fieldset className="form-group">
    <textarea
      className="form-control form-control-lg"
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </fieldset>
);
