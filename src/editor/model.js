import { createEvent, createStore, createEffect, combine } from 'effector';
import * as req from '../request';

const changeText = createEvent();
export const addTag = createEvent();
export const removeTag = createEvent();
export const leavePage = createEvent();

export const createPost = createEffect().use((article) =>
  req.post('/articles', { article }),
);

export const updatePost = createEffect().use((article) =>
  req.put(`/articles/${article.slug}`, article),
);

export const getPost = createEffect().use((slug) =>
  req.get(`/articles/${slug}`),
);

export const onChangeText = (key) => (e) =>
  changeText({ [key]: e.currentTarget.value });

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
    tagList: [...new Set(state.tagList.concat(payload))],
  }))
  .on(removeTag, (state, payload) => ({
    ...state,
    tagList: state.tagList.filter((tag) => payload !== tag),
  }))
  .on(getPost.done, (state, { result }) => ({ ...state, ...result }))
  .reset(leavePage);

export const $tags = $editor.map(({ tagList }) => tagList);

export const $post = createStore({
  article: {},
  comments: [],
}).on(createPost.done, (state, { result }) => ({
  ...state,
  ...result,
}));

export const $isLoading = combine(
  createPost.pending,
  updatePost.pending,
  getPost.pending,
  (create, update, get) => create || update || get,
);
