import { createEvent } from 'effector';
import { createForm } from 'effector-forms';
import { isASCII } from '../../../../library/ascii';

export const tagAdded = createEvent<string>();
export const keyPressed = createEvent<React.KeyboardEvent>();

export const validTagAdded = tagAdded.filter({
  fn: (x) => Boolean(x.length) && isASCII(x),
});

export const form = createForm({
  fields: {
    currentTag: {
      init: '' as string,
    },
  },
});
