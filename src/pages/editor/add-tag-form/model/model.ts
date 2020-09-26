import { createEvent, createStore } from 'effector';
import { isASCII } from 'library/ascii';
import { createFormEvents } from 'library/form';

export const { textChanged, handleTextChanged } = createFormEvents();
export const tagAdded = createEvent<string>();
export const keyPressed = createEvent<React.KeyboardEvent>();

export const validTagAdded = tagAdded.filter({
  fn: (x) => Boolean(x.length) && isASCII(x),
});

export const $currentTag = createStore<string>('');
