import { Spinner } from '@/shared/ui';
import * as types from '../model/types';
import { ArticlePreview } from './article-preview';
import { ArticlesWrapper } from './articles-wrapper';
import { EmptyFeed } from './empty-feed';

type Props = Readonly<{
  loading: boolean;
  isEmpty: boolean;
  articles: types.FeedType['articles'];
  onFavoriteToggle: (payload: types.SelectedArticle) => void;
}>;

export const Feed = ({
  loading,
  isEmpty,
  articles,
  onFavoriteToggle,
}: Props) => {
  return (
    <>
      <EmptyFeed show={isEmpty} />
      <ArticlesWrapper>
        {articles.map((item) => {
          return (
            <li key={item.slug}>
              <ArticlePreview
                author={item.author}
                createdAt={item.createdAt}
                description={item.description}
                favorited={item.favorited}
                favoritesCount={item.favoritesCount}
                slug={item.slug}
                tagList={item.tagList}
                title={item.title}
                onFavoriteToggle={onFavoriteToggle}
              />
            </li>
          );
        })}
        {/* {useList(articlesStore, {
          getKey: (item) => item.slug,
          fn: (item) => (
            <li>
              <ArticlePreview
                author={item.author}
                createdAt={item.createdAt}
                description={item.description}
                favorited={item.favorited}
                favoritesCount={item.favoritesCount}
                slug={item.slug}
                tagList={item.tagList}
                title={item.title}
                onFavoriteToggle={onFavoriteToggle}
              />
            </li>
          ),
        })} */}
      </ArticlesWrapper>
      <Spinner show={loading} />
    </>
  );
};
