import { forward, attach } from 'effector';
import { $profile, $username, PageGate, getProfileFx } from './model';

$profile.on(getProfileFx.doneData, (_, { profile }) => profile);
$username.on(
  PageGate.open.filter({
    fn: (x) => Boolean(x),
  }),
  (_, { url }) => url.replace(/\/@/, ''),
);

forward({
  from: PageGate.open,
  to: attach({
    source: $username,
    effect: getProfileFx,
  }),
});
