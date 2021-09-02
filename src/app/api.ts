import * as api from 'shared/api';
import * as router from 'shared/library/router';

api.instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      router.history.push(router.URLS.LOGIN);
    }

    return Promise.reject(error);
  },
);
