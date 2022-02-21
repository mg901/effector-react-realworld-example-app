import * as http from '@/shared/http';
import * as article from '@/entities/foo';

export const getTags = () => {
  return http.client
    .request<{ tags: article.types.Article['tagList'] }>({
      url: '/tags',
      method: 'GET',
    })
    .then((response) => response.data.tags);
};
