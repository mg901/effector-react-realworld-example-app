import { forward, attach } from 'effector';
import {
  Gate,
  articleDeleted,
  $slug,
  $article,
  fetchArticleFx,
  deleteArticleFx,
} from '.';
import * as router from '../../../modules/router';

forward({
  from: Gate.open,
  to: attach({
    source: $slug,
    effect: fetchArticleFx,
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
