import React from 'react';
import { useFormField } from '../hooks';
import { InputField, TextField } from '../components';
import { onChangeText } from '../auth/model.events';
import { $authUser } from '../auth/model';

export const Input = ({ name, placeholder }) => {
  const value = useFormField({ store: $authUser, name });

  return (
    <InputField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChangeText}
    />
  );
};

export const Textarea = ({ name, placeholder }) => {
  const value = useFormField({ store: $authUser, name });

  return (
    <TextField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChangeText}
    />
  );
};
