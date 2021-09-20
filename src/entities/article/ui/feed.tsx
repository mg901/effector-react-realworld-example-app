import { Store } from 'effector';
import { useList } from 'effector-react';
import { Pagination, Spinner } from 'shared/ui';
import * as types from '../model/types';
import { ArticlePreview } from './article-preview';
import { ArticlesWrapper } from './articles-wrapper';
import { EmptyFeed } from './empty-feed';

type Props = Readonly<{
  loading: boolean;
  isEmpty: boolean;
  pageSize: number;
  pageNumber: number;
  totalPages: number;
  articles: Store<types.FeedType['articles']>;
  onPageChange: (x: number) => void;
  onArticleClick: (x: types.Article) => void;
}>;

export const Feed: React.FC<Props> = ({
  loading,
  isEmpty,
  pageSize,
  pageNumber,
  totalPages,
  articles,
  onPageChange,
  onArticleClick,
}) => {
  return (
    <>
      <EmptyFeed show={isEmpty} />
      <ArticlesWrapper>
        {useList(articles, {
          getKey: (item) => item.slug,
          fn: (item) => (
            <li>
              <ArticlePreview
                data={item}
                onClick={() => onArticleClick(item)}
              />
            </li>
          ),
        })}
      </ArticlesWrapper>
      <Pagination
        current={pageNumber}
        pageSize={pageSize}
        total={totalPages}
        onPageChange={onPageChange}
      />
      <Spinner loading={loading} />
    </>
  );
};
