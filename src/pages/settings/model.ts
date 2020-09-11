import { createEvent, createEffect } from 'effector';
import { authTypes } from '@core/auth';
import { createField } from '@library';
import { put } from '@api';

export const fieldChanged = createEvent<Record<string, string>>();
export const formSubmitted = createEvent();
export const handleFieldChanged = fieldChanged.prepend(createField);

export const changeAuthUserFx = createEffect((user: authTypes.AuthorizedUser) =>
  put('/user', { user }),
);

changeAuthUserFx.done.watch(() => {
  window.location.reload(true);
});
