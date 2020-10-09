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
} from '.';

forward({
  from: $slug.updates,
  to: attach({
    source: $slug,
    effect: fetchCommentsFx,
  }),
});

// submit form
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

// reset form
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

// TODO: remove delete icon other people comments
$errors
  .on(
    [fetchCommentFx.failData, deleteCommentFx.failData],
    (_, error) => error.response?.data,
  )
  .reset(form.$touched);
