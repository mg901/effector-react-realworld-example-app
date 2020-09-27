import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import * as authUser from 'features/user';
import { FormGroup, Input, InputProps } from 'ui';

export const InputField: React.FC<InputProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: authUser.model.$user,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof authUser.model.$user>] ?? '',
  });

  return (
    <FormGroup>
      <Input value={value} name={name} {...props} />
    </FormGroup>
  );
};
