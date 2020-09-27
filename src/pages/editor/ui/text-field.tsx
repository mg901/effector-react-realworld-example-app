import React from 'react';
import { useFormField } from 'library/form';
import { FormGroup, Textarea, TextareaProps } from 'ui';
import { model } from '../model';

type Props = TextareaProps & { name: string };

export const TextField: React.FC<Props> = ({ name, ...props }) => {
  const value = useFormField({
    store: model.$form,
    name,
  });

  return (
    <FormGroup>
      <Textarea name={name} value={value} {...props} />
    </FormGroup>
  );
};
