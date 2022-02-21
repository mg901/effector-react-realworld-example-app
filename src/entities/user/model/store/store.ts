import { createEvent, createEffect, createStore } from 'effector';
import * as api from '../api';
import * as types from '../types';

export const getUserFx = createEffect(api.getUser);

export const updateUserFx = createEffect<
  types.UpdateUserArgs,
  types.UserResponse,
  types.UserError
>(api.changeUser);

export const resetError = createEvent();
export const $error = createStore<types.FailData | null>(null)
  .on(updateUserFx.failData, (_, error) => error.data)
  .reset(resetError);

export const $errorList = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);
