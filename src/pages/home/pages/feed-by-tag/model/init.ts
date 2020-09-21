import { forward } from 'effector';
import * as router from '../../../../../library/router';
import {
  $feed,
  $feedByTag,
  getFeedFx,
  PageGate,
  getFeedByTagFx,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
} from './model';

forward({
  from: [PageGate.open, router.model.$search.updates],
  to: getFeedByTagFx,
});

$feed.on(getFeedFx.done, (state, { params, result }) => ({
  ...state,
  [params.tag]: result,
}));

$feedByTag.on(
  [setFavoriteArticleFx.done, setUnfavoriteArticleFx.done],
  (state, { params, result }) => ({
    ...state,
    articles: state.articles.map((article) =>
      article.slug !== params
        ? article
        : {
            ...article,
            favorited: result.article.favorited,
            favoritesCount: result.article.favoritesCount,
          },
    ),
  }),
);
