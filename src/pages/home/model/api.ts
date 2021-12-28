import * as article from '@/entities/article';
import * as http from '@/shared/http';

export const getTags = () => {
  return http
    .request<{ tags: article.types.Article['tagList'] }>({
      url: 'tags',
      method: 'get',
    })
    .then((response) => response.tags);
};
