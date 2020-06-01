import React from 'react';
import './index.css';

export type Props = Readonly<{
  name: string;
  labelText: string;
  as?: 'input' | 'textarea';
  autoComplete?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}>;

export const FormControl: React.FC<Props> = ({
  name,
  labelText,
  as = 'input',
  value,
  type,
  placeholder,
  rows,
  className = '',
  onChange,
}) => {
  const input = (
    <input
      type={type}
      value={value}
      name={name}
      className={`form-control ${className}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );

  const textarea = (
    <textarea
      value={value}
      name={name}
      rows={rows}
      className={`form-control ${className}`}
      onChange={onChange}
      placeholder={placeholder}
    />
  );

  return (
    <div className="form-group">
      <label htmlFor={name}>
        <div>{labelText}</div>
        {as === 'input' ? input : textarea}
      </label>
    </div>
  );
};
