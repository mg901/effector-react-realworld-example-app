import { createGate } from 'effector-react';
import { request } from '../../../../../api';
import { removeNotASCII } from '../../../../../library/ascii';
import { model } from '../../../../../modules/app';
import * as types from './types';

export const Gate = createGate();

export const fetchTagsFx = model.domain.createEffect(() =>
  request.get<types.getTagsFxDone>('tags').then((x) => x.data.tags),
);

export const $tags = model.domain.createStore<types.TagList>([]);

export const $validTags = $tags.map((tags) => tags.filter(removeNotASCII));
