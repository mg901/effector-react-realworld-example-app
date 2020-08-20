import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import { Textarea, TextareaProps } from '../../../ui';
import { authModel } from '../../../core/auth';

export const TextField: React.FC<TextareaProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: authModel.$authorizedUser,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof authModel.$authorizedUser>] ?? '',
  });

  return <Textarea value={value} name={name} {...props} />;
};
