import { Store } from 'effector';
import { useStoreMap } from 'effector-react';

type Params<T, K> = {
  store: Store<T>;
  name: K | string;
};

export const useFormField = <T extends object, K extends keyof T>({
  store,
  name,
}: Params<T, K>): T[K] =>
  useStoreMap({
    store,
    keys: [name],
    fn: (s, [key]) => s[key as K],
  });
