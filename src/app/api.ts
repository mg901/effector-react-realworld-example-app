import * as http from 'shared/http';
import * as router from 'shared/library/router';

http.instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      router.history.push(router.URLS.LOGIN);
    }

    return Promise.reject(error);
  },
);
