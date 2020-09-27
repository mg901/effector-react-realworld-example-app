import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import * as authUser from 'features/user';
import { FormGroup, Textarea, TextareaProps } from 'ui';

export const TextField: React.FC<TextareaProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: authUser.model.$user,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof authUser.model.$user>] ?? '',
  });

  return (
    <FormGroup>
      <Textarea name={name} value={value} {...props} />
    </FormGroup>
  );
};
