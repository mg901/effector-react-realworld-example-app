import { api } from '@/shared/api';
import * as article from '@/entities/foo';

export const getTags = () => {
  return api
    .request<{ tags: article.types.Article['tagList'] }>({
      url: '/tags',
      method: 'GET',
    })
    .then((response) => response.tags);
};
