import { sample } from 'effector';
import {
  ProfileGate,
  $$author,
  getFeedByAuthorFx,
  getProfileFx,
} from './model';

ProfileGate.state.watch((x) => console.log('gate', x));

// sample({
//   source: $$author,
//   clock: ProfileGate.open,
//   fn: (author) => ({ author }),
//   target: getFeedByAuthorFx,
// });

// sample({
//   source: $$author,
//   clock: ProfileGate.open,
//   target: getProfileFx,
// });
