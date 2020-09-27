import React from 'react';
import { StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import * as currentUser from 'features/current-user';
import { FormGroup, Textarea, TextareaProps } from 'ui';

export const TextField: React.FC<TextareaProps> = ({ name, ...props }) => {
  const value = useStoreMap({
    store: currentUser.model.$user,
    keys: [name],
    fn: (user, [key]) =>
      user[key as keyof StoreValue<typeof currentUser.model.$user>] ?? '',
  });

  return (
    <FormGroup>
      <Textarea value={value} name={name} {...props} />
    </FormGroup>
  );
};
