import { forward } from 'effector';
import { Gate, $tags, fetchTagsFx } from '.';

forward({
  from: Gate.open,
  to: fetchTagsFx,
});

$tags.on(fetchTagsFx.doneData, (_, payload) => payload);
