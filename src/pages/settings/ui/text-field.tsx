import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import * as auth from 'features/user';
import { FormGroup, Textarea, TextareaProps } from 'ui';

export const TextField: React.FC<TextareaProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: auth.model.$user,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof auth.model.$user>] ?? '',
  });

  return (
    <FormGroup>
      <Textarea value={value} name={name} {...props} />
    </FormGroup>
  );
};
