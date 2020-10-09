import { sample, guard, forward } from 'effector';
import { createForm } from 'effector-forms';
import { root } from '../../../root';

export const tagAdded = root.createEvent<string>();
export const keyPressed = root.createEvent<React.KeyboardEvent>();

export const form = createForm({
  fields: {
    currentTag: {
      init: '' as string,
    },
  },
});

// Add tag by pressing to "Enter" key
sample({
  source: form.fields.currentTag.$value,
  clock: guard(keyPressed, { filter: (e) => e.key === 'Enter' }),
  target: tagAdded,
});

// reset form after adding the tag
forward({
  from: tagAdded,
  to: form.reset,
});
