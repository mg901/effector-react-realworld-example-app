import { merge, createStore } from 'effector';
import { asyncSignIn, asyncSignUp } from '../auth/model';

export const $appName = createStore('Conduit');
export const $currentUser = createStore(null);
export const $viewChangeCounter = createStore(0);
export const auth = merge([asyncSignIn.done, asyncSignUp.done]);

export const $errors = createStore({});
export const $token = $currentUser.map((user) => user && user.token);

$currentUser.on(auth, (_, { result }) => result.user);
