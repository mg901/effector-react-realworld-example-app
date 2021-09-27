import { createStore, StoreValue } from 'effector';
import { useStore } from 'effector-react';

export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;

export const $errors = createStore<Errors>({
  errors: {},
});

export const $hasErrors = $errors.map((x) => Object.keys(Object(x)).length > 0);
export const $errorsList = $errors.map((x) => Object.entries(Object(x.errors)));

export const selectors = {
  useHasErrors: (): boolean => useStore($hasErrors),
  useErrorList: (): StoreValue<typeof $errorsList> => useStore($errorsList),
};
