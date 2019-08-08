import agentPromise from 'superagent-promise';
import agent from 'superagent';
import { TOKEN_NAME } from './constants';

const API_ROOT = 'https://conduit.productionready.io/api';

const superagent = agentPromise(agent, Promise);

const tokenPlugin = (req) => {
  const token = localStorage.getItem(TOKEN_NAME);

  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

export const del = (url) =>
  superagent
    .del(`${API_ROOT}${url}`)
    .use(tokenPlugin)
    .then((res) => res.body);
export const get = (url) =>
  superagent
    .get(`${API_ROOT}${url}`)
    .use(tokenPlugin)
    .then((res) => res.body);
export const put = (url, body) =>
  superagent
    .put(`${API_ROOT}${url}`, body)
    .use(tokenPlugin)
    .then((res) => res.body);
export const post = (url, body) =>
  superagent
    .post(`${API_ROOT}${url}`, body)
    .use(tokenPlugin)
    .then((res) => res.body);
