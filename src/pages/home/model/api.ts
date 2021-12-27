import * as article from 'entities/article';
import * as http from 'shared/http';

export const getTags = () => {
  return http
    .get<{ tags: article.types.Article['tagList'] }>('tags')
    .then((response) => response.data.tags);
};
