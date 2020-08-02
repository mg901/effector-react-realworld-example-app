import { sample } from 'effector';
import {
  PageGate,
  $$author,
  getArticlesByAuthorFx,
  getProfileFx,
} from './model';

sample({
  source: $$author,
  clock: PageGate.open,
  fn: (author) => ({ author }),
  target: getArticlesByAuthorFx,
});

sample({
  source: $$author,
  clock: PageGate.open,
  target: getProfileFx,
});
