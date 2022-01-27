import { createEvent, createEffect, restore, split } from 'effector';
import { useStore } from 'effector-react';
import * as visitor from '@/entities/visitor';
import * as http from '@/shared/http';
import { omit } from '@/shared/library';
import { history, ROUTES } from '@/shared/router';
import * as types from './types';

export const $editableFields = visitor.$visitor.map((x) => ({
  image: x.image,
  username: x.username,
  bio: x.bio,
  email: x.email,
  password: '',
}));

export const formSubmitted = createEvent<types.FormFieldsWithPassword>();
export const changeUserDataFx = createEffect<
  types.FormFieldsWithPassword | types.FormFieldsWithoutPassword,
  void,
  Record<string, unknown>
>((payload) => {
  return http.request({
    url: 'user',
    method: 'put',
    data: {
      user: payload,
    },
  });
});

split({
  source: formSubmitted,
  match: {
    hasPassword: (fields) => fields.password.length > 0,
    isEmptyPassword: (fields) => fields.password.length === 0,
  },
  cases: {
    hasPassword: changeUserDataFx,
    isEmptyPassword: changeUserDataFx.prepend<types.FormFieldsWithPassword>(
      (fields) => omit(fields, ['password']),
    ),
  },
});

visitor.logoutClicked.watch(() => {
  history.push(ROUTES.root);
});

changeUserDataFx.done.watch(() => {
  window.location.reload();
});

export const $error = restore(changeUserDataFx.failData, {
  errors: {},
});

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useChangeUserDataLoading: () => useStore(changeUserDataFx.pending),
  useEditableFields: () => useStore($editableFields),
  useHasError: (): boolean => useStore($hasError),
  useErrors: () => useStore($errors),
};
