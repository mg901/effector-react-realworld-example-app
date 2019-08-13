import React from 'react';
import { useFormField } from '../hooks';
import { TextField } from '../components/text-field';
import { editor, onChangeText } from './model';

export const Textarea = ({ name, placeholder }) => {
  const value = useFormField({ store: editor, name });

  return (
    <TextField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChangeText}
    />
  );
};
