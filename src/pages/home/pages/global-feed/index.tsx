import { useGate, useList, useStore } from 'effector-react';
import { ArticlesWrapper, ArticlePreview } from 'shared/feed';
import { Pagination, Spinner } from 'ui';
import * as model from './model';

const GlobalFeedPage: React.FC = () => {
  useGate(model.Gate);
  const loading = useStore(model.fetchFeedFx.pending);
  const { totalPages, currentPage, pageSize } = model.useModel();

  return (
    <>
      <ArticlesWrapper>
        {useList(model.$articles, {
          getKey: (item) => item.slug,
          fn: (item) => (
            <li>
              <ArticlePreview
                data={item}
                onClick={() => model.favoriteToggled(item)}
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

export default GlobalFeedPage;
