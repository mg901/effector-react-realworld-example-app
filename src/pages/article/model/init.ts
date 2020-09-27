import { forward, attach } from 'effector';
import * as router from 'library/router';
import {
  PageGate,
  articleDeleted,
  $slug,
  $article,
  getPageDataFx,
  getArticleFx,
  deleteArticleFx,
} from './model';

forward({
  from: PageGate.open,
  to: attach({
    source: $slug,
    effect: getPageDataFx,
  }),
});

$article.on(getArticleFx.doneData, (_, payload) => payload);

forward({
  from: articleDeleted,
  to: attach({
    source: $slug,
    effect: deleteArticleFx,
  }),
});

deleteArticleFx.done.watch(() => {
  router.model.history.push('/');
});
