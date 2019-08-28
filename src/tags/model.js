import { createEffect, createStore, restore, createEvent } from 'effector';
import { get } from '../request';

export const selectTag = createEvent();
export const getTags = createEffect().use(() => get('/tags'));

export const $selectedTag = restore(selectTag, null);

export const $tags = createStore([]).on(
  getTags.done,
  (_, { result }) => result.tags,
);
