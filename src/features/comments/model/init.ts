import { forward, attach, sample } from 'effector';
import {
  form,
  $comments,
  $errors,
  $slug,
  commentDeleted,
  fetchCommentsFx,
  fetchCommentFx,
  deleteCommentFx,
} from './model';

forward({
  from: form.submit,
  to: attach({
    source: {
      slug: $slug,
      body: form.fields.comment.$value,
    },
    effect: fetchCommentFx,
  }),
});

forward({
  from: fetchCommentFx,
  to: form.reset,
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

$errors
  .on(fetchCommentFx.failData, (_, error) => error.response?.data)
  .reset(form.fields.comment.onChange);
