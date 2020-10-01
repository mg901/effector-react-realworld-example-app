import { createEffect, createStore } from 'effector';
import * as api from 'api';
import * as authUser from 'features/user';
import { createFormEvents } from 'library/form';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();

export const changeUserDataFx = createEffect<authUser.types.User, void, Error>({
  handler: (user) => api.put('/user', { user }),
});

export const $user = authUser.model.$user.map((x) => x);
export const $errors = createStore<Errors>({
  errors: [] as Error['errors'],
});
