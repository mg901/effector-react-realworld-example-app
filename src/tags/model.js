import { createEffect, createStore } from 'effector';
import { get } from '../request';

export const getTags = createEffect().use(() => get('/tags'));

export const $tags = createStore([]).on(
  getTags.done,
  (_, { result }) => result.tags,
);
