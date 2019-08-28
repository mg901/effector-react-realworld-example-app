import agentPromise from 'superagent-promise';
import superagent from 'superagent';
import { TOKEN_NAME } from './constants';

const API_ROOT = 'https://conduit.productionready.io/api';

const agent = agentPromise(superagent, Promise);

const tokenPlugin = (req) => {
  const token = localStorage.getItem(TOKEN_NAME);

  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

export const del = (url) =>
  agent
    .del(`${API_ROOT}${url}`)
    .use(tokenPlugin)
    .then((res) => res.body);
export const get = (url) =>
  agent
    .get(`${API_ROOT}${url}`)
    .use(tokenPlugin)
    .then((res) => res.body);
export const put = (url, body) =>
  agent
    .put(`${API_ROOT}${url}`, body)
    .use(tokenPlugin)
    .then((res) => res.body);
export const post = (url, body) =>
  agent
    .post(`${API_ROOT}${url}`, body)
    .use(tokenPlugin)
    .then((res) => res.body);
