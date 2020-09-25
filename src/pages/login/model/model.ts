import { createEvent, createStore, createEffect } from 'effector';
import * as api from 'api';
import * as auth from 'features/user';
import { createField } from 'library/form';
import * as types from './types';

export const formSubmitted = createEvent<React.FormEvent>();
export const fieldChanged = createEvent<Record<string, string>>();
export const handleFieldChanged = fieldChanged.prepend(createField);

export const $form = createStore<types.Form>({ email: '', password: '' });

export const signInFx = createEffect<
  types.Form,
  auth.types.AuthorizedUser,
  auth.types.AuthFail
>({
  handler: ({ email, password }: types.Form) =>
    api
      .post<auth.types.SignUpFxDone>('/users/login', {
        user: { email, password },
      })
      .then((x) => x.user),
});
