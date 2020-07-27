import { createEvent, createEffect } from 'effector';
import { put } from '../../api';
import { AuthorizedUser } from '../../auth';

export const fieldChanged = createEvent<Record<string, string>>();
export const formSubmitted = createEvent();

export const handleFieldChanged = fieldChanged.prepend(
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => ({
    [e.target.name]: e.target.value,
  }),
);

export const changeAuthUserFx = createEffect({
  handler: (user: AuthorizedUser) => put('/user', { user }),
});

changeAuthUserFx.done.watch(() => {
  window.location.reload(true);
});
