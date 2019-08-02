import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = (res) => res.body;

let token = null;
const tokenPlugin = (req) => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

export const requests = {
  get: (url) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  del: (url) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .then(responseBody),
};

export const auth = {
  current: () => requests.get('/user'),
  signIn: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  signUp: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: (user) => requests.put('/user', { user }),
};

export const tags = {
  getAll: () => requests.get('/tags'),
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = (article) => ({ ...article, slug: undefined });

export const articles = {
  all: (page) => requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(
      `/articles?author=${encodeURIComponent(author)}&${limit(5, page)}`,
    ),
  byTag: (tag, page) =>
    requests.get(`/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`),
  del: (slug) => requests.del(`/articles/${slug}`),
  favorite: (slug) => requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(
      `/articles?favorited=${encodeURIComponent(author)}&${limit(5, page)}`,
    ),
  feed: () => requests.get('/articles/feed?limit=10&offset=0'),
  get: (slug) => requests.get(`/articles/${slug}`),
  unfavorite: (slug) => requests.del(`/articles/${slug}/favorite`),
  update: (article) =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: (article) => requests.post('/articles', { article }),
};

export const comments = {
  forArticle: (slug) => requests.get(`/articles/${slug}/comments`),
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
};

export const profile = {
  get: (username) => requests.get(`/profiles/${username}`),
  follow: (username) => requests.post(`/profiles/${username}/follow`),
  unfollow: (username) => requests.del(`/profiles/${username}/follow`),
};

export const setToken = (newToken) => {
  token = newToken;
};
