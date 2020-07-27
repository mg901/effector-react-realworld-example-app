import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import { Textarea, TextareaProps } from '../../../ui';
import { $authorizedUser } from '../../../auth';

export const TextField: React.FC<TextareaProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: $authorizedUser,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof $authorizedUser>] ?? '',
  });

  return <Textarea value={value} name={name} {...props} />;
};
