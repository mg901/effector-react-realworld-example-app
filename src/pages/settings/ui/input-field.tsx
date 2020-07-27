import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import { Input, InputProps } from '../../../ui';
import { $authorizedUser } from '../../../auth';

export const InputField: React.FC<InputProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: $authorizedUser,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof $authorizedUser>] ?? '',
  });

  return <Input value={value} name={name} {...props} />;
};
