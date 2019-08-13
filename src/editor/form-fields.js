import React from 'react';
import { useFormField } from '../hooks';
import { InputField } from '../components/input-field';
import { TextField } from '../components/text-field';
import { editor, onChangeText } from './model';

export const Input = ({ name, placeholder, onKeyDown }) => {
  const value = useFormField({ store: editor, name });

  return (
    <InputField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChangeText}
      onKeyDown={onKeyDown}
    />
  );
};

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
