import React from 'react';
import { useFormField } from '../../../library';
import { Textarea, TextareaProps } from '../../../ui';
import { model } from '../model';

type Props = TextareaProps & { name: string };

export const TextField: React.FC<Props> = ({ name, ...props }) => {
  const value = useFormField({
    store: model.$form,
    name,
  });

  return <Textarea value={value} name={name} {...props} />;
};
