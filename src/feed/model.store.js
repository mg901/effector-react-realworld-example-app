import { createStore } from 'effector';

const initialState = { articles: [], articlesCount: null };

export const $getGlobalFeed = createStore(initialState);
export const $getUserFeed = createStore(initialState);
export const $feedByTag = createStore(initialState);
