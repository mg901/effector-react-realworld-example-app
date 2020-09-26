import { sample, guard } from 'effector';
import { $currentTag, keyPressed, tagAdded, textChanged } from './model';

$currentTag.on(textChanged, (_, payload) => payload).reset(tagAdded);

sample({
  source: $currentTag,
  clock: guard(keyPressed, { filter: (e) => e.key === 'Enter' }),
  target: tagAdded,
});
