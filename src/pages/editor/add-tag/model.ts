import { createEvent, sample, guard, forward } from 'effector';
import { createForm } from 'effector-forms';

export const tagAdded = createEvent<string>();
export const keyPressed = createEvent<React.KeyboardEvent>();

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
