import { StrictMode } from 'react';
import { render } from 'react-dom';
import { api } from '@/shared/api';
import { App } from './app';

const BASE_URL = process.env.API_ROOT ?? 'https://api.realworld.io/api';

api.init({
  baseURL: BASE_URL,
  onError: (error) => {
    if (error.status === 401) {
      window.location.assign('/login');
    }
  },
});

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
