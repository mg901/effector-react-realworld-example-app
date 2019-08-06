import { createEvent, createStore, createEffect } from 'effector';

const changeText = createEvent();
const addTag = createEvent();
export const leavePage = createEvent();

export const asyncUpdateArticle = createEffect();
export const asyncGetArticle = createEffect();
export const asyncCreateArticle = createEffect();

export const onChangeText = (key) => (e) =>
  changeText({ [key]: e.currentTarget.value });

export const $editor = createStore({
  title: '',
  description: '',
  body: '',
  tagInput: '',
  tagList: [],
});

$editor
  .on(changeText, (state, payload) => ({ ...state, ...payload }))
  .on(addTag, (state, payload) => ({
    ...state,
    tagList: [...state.tagList, payload],
  }))
  .on(asyncGetArticle.done, (state, { result }) => ({ ...state, ...result }))
  .reset(leavePage);
