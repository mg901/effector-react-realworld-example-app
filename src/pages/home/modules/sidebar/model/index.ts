import { forward } from 'effector';
import { createGate } from 'effector-react';
import { request } from '../../../../../api';
import { root } from '../../../../../root';
import * as types from './types';

export const Gate = createGate();

export const fetchTagsFx = root.createEffect(() =>
  request.get<types.getTagsFxDone>('tags').then((x) => x.data.tags),
);

export const $tags = root
  .createStore<types.TagList>([])
  .on(fetchTagsFx.doneData, (_, payload) => payload);

forward({
  from: Gate.open,
  to: fetchTagsFx,
});
