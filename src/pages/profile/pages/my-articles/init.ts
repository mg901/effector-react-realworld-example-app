import { sample } from 'effector';
import { $$author, ProfileGate } from '../../model';
import { getFeedFx } from './model';

sample({
  source: $$author,
  clock: ProfileGate.open,
  fn: (author) => ({ author }),
  target: getFeedFx,
});
