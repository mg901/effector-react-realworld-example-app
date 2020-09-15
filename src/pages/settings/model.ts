import { createEvent, createEffect } from 'effector';
import { put } from '../../api';
import { authTypes } from '../../core/auth';
import { createField } from '../../library';

export const fieldChanged = createEvent<Record<string, string>>();
export const formSubmitted = createEvent();
export const handleFieldChanged = fieldChanged.prepend(createField);

export const changeAuthUserFx = createEffect((user: authTypes.AuthorizedUser) =>
  put('/user', { user }),
);

changeAuthUserFx.done.watch(() => {
  window.location.reload();
});
