import { forward, attach, sample } from 'effector';
import {
  $commentText,
  $comments,
  $errors,
  $slug,
  formSubmitted,
  textChanged,
  commentDeleted,
  fetchCommentsFx,
  fetchCommentFx,
  deleteCommentFx,
} from './model';

$commentText.on(textChanged, (_, payload) => payload).reset(fetchCommentFx);

forward({
  from: formSubmitted,
  to: attach({
    source: { slug: $slug, body: $commentText },
    effect: fetchCommentFx,
  }),
});

sample({
  source: $slug,
  clock: commentDeleted,
  fn: (slug, id) => ({ slug, id }),
  target: deleteCommentFx,
});

$comments
  .on(fetchCommentsFx.doneData, (_, payload) => payload)
  .on(fetchCommentFx.doneData, (state, payload) => [payload, ...state])
  .on(deleteCommentFx.done, (state, { params }) =>
    state.filter(({ id }) => id !== params.id),
  );

$errors.on(fetchCommentFx.failData, (_, payload) => payload).reset(textChanged);
