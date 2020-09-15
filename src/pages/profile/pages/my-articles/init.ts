import { forward } from 'effector';
import { PageGate, getMyArticlesFx, $myArticles } from './model';

$myArticles.on(getMyArticlesFx.doneData, (_, payload) => payload);

forward({
  from: PageGate.open,
  to: getMyArticlesFx,
});
