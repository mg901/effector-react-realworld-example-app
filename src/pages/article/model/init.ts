import { sample } from 'effector';
import {
  PageGate,
  getPageDataFx,
  $article,
  getArticleFx,
  $comments,
  getCommentFx,
} from './model';

sample({
  source: PageGate.open,
  clock: PageGate.open,
  fn: ({ params }) => params,
  target: getPageDataFx,
});

$article.on(getArticleFx.doneData, (_, payload) => payload);
$comments.on(getCommentFx.doneData, (_, payload) => payload);
