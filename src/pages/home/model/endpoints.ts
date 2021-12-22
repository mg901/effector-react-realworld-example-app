import * as article from 'entities/article';
import * as api from 'shared/api';

export const getTags = async () => {
  const { data } = await api.get<{ tags: article.types.Article['tagList'] }>(
    'tags',
  );

  return data.tags;
};
