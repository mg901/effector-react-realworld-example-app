import { createEvent, createStore, createEffect, combine } from 'effector';
import * as api from '../api';

const changeText = createEvent();
const addTag = createEvent();
export const removeTag = createEvent();
export const leavePage = createEvent();

export const asyncCreatePost = createEffect().use((article) =>
  api.articles.create(article),
);

export const asyncUpdatePost = createEffect().use((article) =>
  api.articles.update(article),
);

export const asyncGetPost = createEffect().use((slug) =>
  api.articles.get(slug),
);

export const onChangeText = (key) => (e) =>
  changeText({ [key]: e.currentTarget.value });

export const onAddTag = (e) => {
  if (e.key === 'Enter') {
    addTag(e.currentTarget.value);
  }
};

export const $editor = createStore({
  title: '',
  description: '',
  body: '',
  tagInput: '',
  tagList: [],
})
  .on(changeText, (state, payload) => ({ ...state, ...payload }))
  .on(addTag, (state, payload) => ({
    ...state,
    tagInput: '',
    tagList: [...state.tagList, payload],
  }))
  .on(removeTag, (state, payload) => ({
    ...state,
    tagList: state.tagList.filter((tag) => payload !== tag),
  }))
  .on(asyncGetPost.done, (state, { result }) => ({ ...state, ...result }))
  .reset(leavePage);

export const $tags = $editor.map(({ tagList }) => tagList);

export const $post = createStore({
  article: {},
  comments: [],
}).on(asyncCreatePost.done, (state, { result }) => ({
  ...state,
  ...result,
}));

export const $isLoading = combine(
  asyncCreatePost.pending,
  asyncUpdatePost.pending,
  asyncGetPost.pending,
  (create, update, get) => create || update || get,
);
