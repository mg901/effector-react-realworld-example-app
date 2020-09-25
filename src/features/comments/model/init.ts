import { forward, attach, sample } from 'effector';
import {
  $commentText,
  $comments,
  $slug,
  formSubmitted,
  textChanged,
  commentDeleted,
  getCommentsFx,
  addCommentFx,
  deleteCommentFx,
} from './model';

formSubmitted.watch((e) => e.preventDefault());

$commentText.on(textChanged, (_, payload) => payload).reset(addCommentFx);

forward({
  from: formSubmitted,
  to: attach({
    source: { slug: $slug, body: $commentText },
    effect: addCommentFx,
  }),
});

sample({
  source: $slug,
  clock: commentDeleted,
  fn: (slug, id) => ({ slug, id }),
  target: deleteCommentFx,
});

$comments
  .on(getCommentsFx.doneData, (_, payload) => payload)
  .on(addCommentFx.doneData, (state, payload) => [...state, payload])
  .on(commentDeleted, (state, payload) =>
    state.filter(({ id }) => id !== payload),
  );
