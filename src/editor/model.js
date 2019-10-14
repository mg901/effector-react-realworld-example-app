import { createEvent, createStore, createEffect, combine } from 'effector';
import { post, put, get } from '../request';
import { uniq } from '../helpers';

export const createArticle = createEffect().use((article) =>
  post('/articles', { article }),
);

export const updateArticle = createEffect().use((article) =>
  put(`/articles/${article.slug}`, article),
);

export const getArticle = createEffect().use((slug) =>
  get(`/articles/${slug}`),
);

export const editableArticle = createStore({
  article: {},
  comments: [],
}).on(createArticle.done, (state, { result }) => ({
  ...state,
  ...result,
}));

export const isLoading = combine(
  createArticle.pending,
  updateArticle.pending,
  getArticle.pending,
  (createA, updateA, getA) => createA || updateA || getA,
);

export const changeText = createEvent();
export const addTag = createEvent();
export const removeTag = createEvent();

export const onChangeText = changeText.prepend((e) => ({
  [e.currentTarget.name]: e.currentTarget.value,
}));

export const onAddTag = (e) => {
  if (e.key === 'Enter') {
    addTag(e.currentTarget.value);
  }
};

export const editor = createStore({
  title: '',
  description: '',
  body: '',
  tagInput: '',
  tagList: [],
})
  .on(changeText, (state, payload) => ({ ...state, ...payload }))
  .on(
    addTag.filter({ fn: (string) => string.length > 0 }),
    ({ tagList, ...state }, payload) => ({
      ...state,
      tagInput: '',
      tagList: uniq([...tagList, payload]),
    }),
  )
  .on(removeTag, (state, payload) => ({
    ...state,
    tagList: state.tagList.filter((tag) => payload !== tag),
  }))
  .on(getArticle.done, (state, { result }) => ({ ...state, ...result }));

export const tags = editor.map(({ tagList }) => tagList);
