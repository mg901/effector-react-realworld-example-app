import React from 'react';
import { Event } from 'effector';
import { ChangeEvent } from '../../types';
import './index.css';

type Props = Readonly<{
  name: string;
  value?: string;
  rows?: number;
  placeholder?: string;
  onChange: Event<ChangeEvent>;
}>;

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
