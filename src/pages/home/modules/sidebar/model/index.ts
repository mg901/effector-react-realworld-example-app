import { createGate } from 'effector-react';
import { request } from '../../../../../api';
import { removeNotASCII } from '../../../../../library/ascii';
import { root } from '../../../../../root';
import * as types from './types';

export const Gate = createGate();

export const fetchTagsFx = root.createEffect(() =>
  request.get<types.getTagsFxDone>('tags').then((x) => x.data.tags),
);

export const $tags = root.createStore<types.TagList>([]);

export const $validTags = $tags.map((tags) => tags.filter(removeNotASCII));
