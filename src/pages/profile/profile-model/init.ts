import { sample, guard } from 'effector';
import * as profile from './model';

sample({
  source: profile.ProfileGate.state,
  clock: guard(profile.ProfileGate.state, {
    filter: ({ url }) => Boolean(url),
  }),
  fn: ({ url }) => url.replace(/\/@/, ''),
  target: profile.getProfileFx,
});

// sample({
//   source: ProfileGate.state,
//   clock: guard(ProfileGate.state, { filter: ({ url }) => Boolean(url) }),
//   fn: ({ url }) => ({ author: url.replace(/\/@/, '') }),
//   target: getFeedFx,
// });
