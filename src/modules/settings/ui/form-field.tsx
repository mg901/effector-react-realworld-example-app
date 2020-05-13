import React from 'react';
import { handleFieldChanged } from '../events';
import { $user } from '../model';
import { FormControl } from '../../../ui';
import { useFormField } from '../../../library';

type Props = Readonly<{
  labelText: string;
  name: string;
  as?: 'input' | 'textarea';
  rows?: number;
  placeholder?: string;
}>;

export const FormField: React.FC<Props> = ({
  as,
  labelText,
  name,
  rows,
  placeholder,
}) => {
  const value = useFormField({
    store: $user,
    name,
  });

  return (
    <FormControl
      as={as}
      labelText={labelText}
      name={name}
      value={value}
      rows={rows}
      onChange={handleFieldChanged}
      placeholder={placeholder}
    />
  );
};
