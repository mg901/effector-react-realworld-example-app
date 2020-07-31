import { sample } from 'effector';
import { PageGate, getArticlesByAuthorFx, $$author } from './model';

sample({
  source: $$author,
  clock: [PageGate.open],
  fn: (author) => ({ author }),
  target: getArticlesByAuthorFx,
});
