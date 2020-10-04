import { sample, guard, forward } from 'effector';
import { form, keyPressed, tagAdded } from './model';

sample({
  source: form.fields.currentTag.$value,
  clock: guard(keyPressed, { filter: (e) => e.key === 'Enter' }),
  target: tagAdded,
});

forward({
  from: tagAdded,
  to: form.reset,
});
