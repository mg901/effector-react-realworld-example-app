import React from 'react';

export const InputFiled = ({ type = 'text', value, placeholder, onChange }) => {
  console.log('type', type);

  return (
    <fieldset className="form-group">
      <input
        className="form-control form-control-lg"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};
