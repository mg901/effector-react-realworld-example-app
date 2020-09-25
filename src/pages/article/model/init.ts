import { forward, attach } from 'effector';
import {
  PageGate,
  getPageDataFx,
  $slug,
  $article,
  getArticleFx,
} from './model';

forward({
  from: PageGate.open,
  to: attach({ source: $slug, effect: getPageDataFx }),
});

$article.on(getArticleFx.doneData, (_, payload) => payload);
