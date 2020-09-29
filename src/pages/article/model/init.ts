import { forward, attach } from 'effector';
import * as router from 'library/router';
import {
  PageGate,
  articleDeleted,
  $slug,
  $article,
  fetchPageDataFx,
  fetchArticleFx,
  deleteArticleFx,
} from './model';

forward({
  from: PageGate.open,
  to: attach({
    source: $slug,
    effect: fetchPageDataFx,
  }),
});

$article.on(fetchArticleFx.doneData, (_, payload) => payload);

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
