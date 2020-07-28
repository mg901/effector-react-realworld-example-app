import React from 'react';
import { Textarea, TextareaProps } from '../../../ui';
import { useFormField } from '../../../library';
import { $form } from '../model';

type Props = TextareaProps & { name: string };

export const TextField: React.FC<Props> = ({ name, ...props }) => {
  const value = useFormField({
    store: $form,
    name,
  });

  return <Textarea value={value} name={name} {...props} />;
};
