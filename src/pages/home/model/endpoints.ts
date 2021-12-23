import * as article from 'entities/article';
import * as api from 'shared/api';

export const getTags = () => {
  return api
    .get<{ tags: article.types.Article['tagList'] }>('tags')
    .then((response) => response.data.tags);
};
