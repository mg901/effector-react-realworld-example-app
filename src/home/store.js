import { createEffect, createStore } from 'effector';
import * as agent from '../api';

export const getAsyncTags = createEffect();
export const getAllArticles = createEffect();

export const $tags = createStore([]);
export const $token = createStore(null);
export const $articles = createStore([]);
export const $viewChangeCounter = createStore(0);

getAsyncTags.use(agent.tags.getAll);

$tags
  .on(getAsyncTags.done, (state, { result: { tags } }) => [...state, ...tags])
  .on(getAsyncTags.fail, (_, { error }) => error);
