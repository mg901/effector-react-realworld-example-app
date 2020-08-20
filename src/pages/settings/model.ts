import { createEvent, createEffect } from 'effector';
import { put } from '../../api';
import { createField } from '../../library';
import { authTypes } from '../../core/auth';

export const fieldChanged = createEvent<Record<string, string>>();
export const formSubmitted = createEvent();
export const handleFieldChanged = fieldChanged.prepend(createField);

export const changeAuthUserFx = createEffect({
  handler: (user: authTypes.AuthorizedUser) => put('/user', { user }),
});

changeAuthUserFx.done.watch(() => {
  window.location.reload(true);
});
