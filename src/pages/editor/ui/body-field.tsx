import React from 'react';
import { useField } from 'effector-forms';
import { TextField } from 'ui';
import { model } from '../model';

export const BodyField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.body);

  return (
    <TextField
      name={name}
      placeholder="Write your article (in markdown)"
      rows={8}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
