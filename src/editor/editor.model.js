import { createEvent, createStore } from 'effector';
import { getArticle } from './editable-article.model';

export const changeText = createEvent();
export const addTag = createEvent();
export const removeTag = createEvent();

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
  .on(getArticle.done, (state, { result }) => ({ ...state, ...result }));

export const $tags = $editor.map(({ tagList }) => tagList);
