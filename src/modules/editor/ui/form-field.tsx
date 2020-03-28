import React from 'react';
import { useStoreMap } from 'effector-react';
import { handleFieldChanged } from '../events';
import { $form } from '../model';
import { Form } from '../types';
import { FormControl } from '../../../ui/form-control';

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
  const value = useStoreMap({
    store: $form,
    keys: [name],
    fn: (s, [key]) => s[key as keyof Form],
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
