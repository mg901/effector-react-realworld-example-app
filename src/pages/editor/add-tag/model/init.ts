import { sample, guard, forward } from 'effector';
import { form, keyPressed, tagAdded } from '.';

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
