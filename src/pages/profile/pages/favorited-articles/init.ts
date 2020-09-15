import { forward } from 'effector';
import { $favoritedArticles, getFavoritedArticlesFx, PageGate } from './model';

$favoritedArticles.on(getFavoritedArticlesFx.doneData, (_, payload) => payload);

forward({
  from: PageGate.open,
  to: getFavoritedArticlesFx,
});
