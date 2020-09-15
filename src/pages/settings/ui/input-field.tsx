import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import * as auth from '../../../auth';
import { Input, InputProps } from '../../../ui';

export const InputField: React.FC<InputProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: auth.model.$authorizedUser,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof auth.model.$authorizedUser>] ?? '',
  });

  return <Input value={value} name={name} {...props} />;
};
