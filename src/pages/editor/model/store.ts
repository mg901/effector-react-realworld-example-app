import { createEvent, createStore, sample } from 'effector';
import * as article from '@/entities/foo';

export const attachSlug = createEvent<string>();
const $slug = createStore<string>('').on(attachSlug, (_, payload) => payload);

// sample({
//   clock: Gate.open,
//   source: $slug,
//   filter: Boolean,
//   target: article.store.getArticleFx,
// });

export const submitForm = createEvent<article.types.Article>();

sample({
  clock: submitForm,
  source: $slug,
  filter: Boolean,
  fn: (slug, fields) => ({ ...fields, slug }),
  target: article.store.updateArticleFx,
});

sample({
  clock: submitForm,
  filter: $slug.map(Boolean),
  target: article.store.createArticleFx,
});

// export const redirectToArticleIdFx = createEffect((slug: string) => {
//   history.replace(`/article/${slug}`);
// });

// sample({
//   clock: [
//     article.store.createArticleFx.doneData,
//     article.store.updateArticleFx.doneData,
//   ],
//   fn: (data) => data.article.slug,
//   target: redirectToArticleIdFx,
// });
