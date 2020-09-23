import { createEvent, createEffect } from 'effector';
import * as api from 'api';
import * as auth from 'features/auth';
import { createField } from 'library/form';

export const fieldChanged = createEvent<Record<string, string>>();
export const formSubmitted = createEvent();

export const handleFieldChanged = fieldChanged.prepend(createField);

export const changeAuthUserFx = createEffect(
  (user: auth.types.AuthorizedUser) => api.put('/user', { user }),
);

changeAuthUserFx.done.watch(() => {
  window.location.reload();
});
