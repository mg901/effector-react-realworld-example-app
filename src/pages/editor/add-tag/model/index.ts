import { createForm } from 'effector-forms';
import { isASCII } from '../../../../library/ascii';
import { root } from '../../../../root';

export const tagAdded = root.createEvent<string>();
export const keyPressed = root.createEvent<React.KeyboardEvent>();

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
