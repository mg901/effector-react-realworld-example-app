import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import { authModel } from '../../../core/auth';
import { Input, InputProps } from '../../../ui';

export const InputField: React.FC<InputProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: authModel.$authorizedUser,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof authModel.$authorizedUser>] ?? '',
  });

  return <Input value={value} name={name} {...props} />;
};
