import React from 'react';
import { useField } from 'effector-forms';
import { InputField } from 'ui';
import { model } from '../model';

export const TitleField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.title);

  return (
    <InputField
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
