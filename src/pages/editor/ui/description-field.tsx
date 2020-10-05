import React from 'react';
import { useField } from 'effector-forms';
import { InputField } from '../../../ui';
import { model } from '../model';

export const DescriptionField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.description);

  return (
    <InputField
      name={name}
      placeholder="What's this article about?"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
