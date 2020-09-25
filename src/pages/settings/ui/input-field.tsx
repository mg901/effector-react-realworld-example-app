import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import * as auth from 'features/user';
import { FormGroup, Input, InputProps } from 'ui';

export const InputField: React.FC<InputProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: auth.model.$user,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof auth.model.$user>] ?? '',
  });

  return (
    <FormGroup>
      <Input value={value} name={name} {...props} />
    </FormGroup>
  );
};
