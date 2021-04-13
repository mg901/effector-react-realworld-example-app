import { useGate, useList, useStore } from 'effector-react';
import { EmptyArticles, ArticlesWrapper, ArticlePreview } from 'shared/feed';
import { Pagination, Spinner } from 'ui';
import * as model from './model';

const FeedByTagPage: React.FC = () => {
  useGate(model.Gate);

  // prettier-ignore
  const { 
    isEmptyFeed, 
    currentPage, 
    pageSize, 
    totalPages, 
    loading 
  } = useStore(
    model.$feedModel,
  );

  return (
    <>
      <EmptyArticles show={isEmptyFeed} />
      <ArticlesWrapper>
        {useList(model.$articles, {
          getKey: (item) => item.slug,
          fn: (item) => (
            <li>
              <ArticlePreview
                data={item}
                onClick={() => {
                  model.favoriteToggled(item);
                }}
              />
            </li>
          ),
        })}
      </ArticlesWrapper>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalPages}
        onItemClick={model.currentPageWasSet}
      />
      <Spinner loading={loading} />
    </>
  );
};

export default FeedByTagPage;
