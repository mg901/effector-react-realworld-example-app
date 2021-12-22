import { Store } from 'effector';
import { useList } from 'effector-react';
import { Spinner } from 'shared/ui';
import * as types from '../model/types';
import { ArticlePreview } from './article-preview';
import { ArticlesWrapper } from './articles-wrapper';
import { EmptyFeed } from './empty-feed';

type Props = Readonly<{
  loading: boolean;
  isEmpty: boolean;
  articlesStore: Store<types.FeedType['articles']>;
  onFavoriteToggle: (payload: types.SelectedArticle) => void;
}>;

export const Feed: React.FC<Props> = ({
  loading,
  isEmpty,
  articlesStore,
  onFavoriteToggle,
}) => {
  return (
    <>
      <EmptyFeed show={isEmpty} />
      <ArticlesWrapper>
        {useList(articlesStore, {
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
        })}
      </ArticlesWrapper>
      <Spinner show={loading} />
    </>
  );
};

// export const Feed: React.FC<Props> = ({
//   loading,
//   isEmpty,
//   pageSize,
//   pageNumber,
//   totalPages,
//   articles,
//   onPageChange,
//   onArticleClick,
// }) => {
//   const handleClick = useCallback(
//     (args: types.SelectedArticle) => {
//       onArticleClick(args);
//     },
//     [onArticleClick],
//   );

//   return (
//     <>
//       <EmptyFeed show={isEmpty} />
//       <ArticlesWrapper>
//         {useList(articles, {
//           getKey: (item) => item.slug,
//           fn: (item) => (
//             <li>
//               <ArticlePreview
//                 author={item.author}
//                 createdAt={item.createdAt}
//                 description={item.description}
//                 favorited={item.favorited}
//                 favoritesCount={item.favoritesCount}
//                 slug={item.slug}
//                 tagList={item.tagList}
//                 title={item.title}
//                 onClick={handleClick}
//               />
//             </li>
//           ),
//         })}
//       </ArticlesWrapper>
//       {/* <Pagination
//         current={pageNumber}
//         pageSize={pageSize}
//         total={totalPages}
//         onPageChange={onPageChange}
//       /> */}
//       <Spinner show={loading} />
//     </>
//   );
// };
