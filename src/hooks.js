import { useStoreMap } from 'effector-react';

export const useFormField = ({ store, name }) =>
  useStoreMap({
    store,
    keys: [name],
    fn: (s, [key]) => s[key],
  });
