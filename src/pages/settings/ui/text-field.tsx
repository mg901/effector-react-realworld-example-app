import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import * as auth from 'features/auth';
import { Textarea, TextareaProps } from 'ui';

export const TextField: React.FC<TextareaProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: auth.model.$authorizedUser,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof auth.model.$authorizedUser>] ?? '',
  });

  return <Textarea value={value} name={name} {...props} />;
};
