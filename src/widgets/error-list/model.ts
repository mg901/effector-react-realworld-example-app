import { createStore } from 'effector';

export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;

export const $errors = createStore<Errors>({
  errors: {},
});

export const $hasErrors = $errors.map((x) => Object.keys(x).length);
export const $errorsList = $errors.map((x) => Object.entries(x.errors));
