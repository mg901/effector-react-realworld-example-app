import { createEvent, createStore, forward } from 'effector';
import { useStore, createGate } from 'effector-react';
import { history, ROUTES } from '@/shared/router';
import * as session from '@/entities/session';

export const Gate = createGate();
export const submitForm = createEvent<session.types.UpdateVisitorFxArgs>();

export const $editableFields = session.$visitor.map((x) => ({
  image: x.image,
  username: x.username,
  bio: x.bio,
  email: x.email,
  password: '',
}));

forward({
  from: submitForm,
  to: session.updateVisitorFx,
});

session.reset.watch(() => {
  history.push(ROUTES.root);
});

export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on(session.updateVisitorFx.failData, (_, payload) => payload)
  .reset(Gate.close);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useUpdateVisitorLoading: () => useStore(session.updateVisitorFx.pending),
  useEditableFields: () => useStore($editableFields),
  useHasError: (): boolean => useStore($hasError),
  useErrors: () => useStore($errors),
};
