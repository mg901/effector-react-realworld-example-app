import * as http from '@/shared/http';
import * as article from '@/entities/foo';

export const getTags = () => {
  return http
    .request<{ tags: article.types.Article['tagList'] }>({
      url: 'tags',
      method: 'get',
    })
    .then((response) => response.tags);
};
