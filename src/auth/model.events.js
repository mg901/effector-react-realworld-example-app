import { createEvent } from 'effector';

export const changeText = createEvent();
export const onSignIn = createEvent();
export const onSignUp = createEvent();
export const onLogOut = createEvent();

export const onChangeText = changeText.prepend((e) => ({
  [e.currentTarget.name]: e.currentTarget.value,
}));
