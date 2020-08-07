import { sample } from 'effector';
import {
  ProfileGate,
  $$author,
  getArticlesByAuthorFx,
  getProfileFx,
} from './model';

sample({
  source: $$author,
  clock: ProfileGate.open,
  fn: (author) => ({ author }),
  target: getArticlesByAuthorFx,
});

sample({
  source: $$author,
  clock: ProfileGate.open,
  target: getProfileFx,
});
