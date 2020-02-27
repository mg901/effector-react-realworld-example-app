import React from 'react';
import './index.css';

type Props = {
  value?: string;
  rows?: number;
  placeholder?: string;
  name: string;
  onChange: () => void;
};

export const TextField: React.FC<Props> = ({
  value,
  rows = 8,
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
