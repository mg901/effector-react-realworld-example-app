import { createForm } from 'effector-forms';
import { isASCII } from '../../../../library/ascii';
import { model } from '../../../../modules/app';

export const tagAdded = model.domain.createEvent<string>();
export const keyPressed = model.domain.createEvent<React.KeyboardEvent>();

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
