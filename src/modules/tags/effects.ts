import { createEffect } from 'effector';
import { get } from '../../api';
import { Tags } from './types';

export const fxFetchTags = createEffect({
  handler: () => get<Tags>('/tags'),
});
