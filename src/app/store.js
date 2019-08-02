import { createStore } from 'effector';

export const $appNam = createStore('Conduit');
export const $token = createStore(null);
export const $viewChangeCounter = createStore(0);
export const $errors = createStore({});
