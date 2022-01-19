import { guard } from 'effector';
import { createGate } from 'effector-react';
import * as visitor from '@/entities/visitor';

export const Gate = createGate();

guard({
  source: visitor.$isAuthorized,
  filter: Boolean,
  clock: Gate.open,
  target: visitor.getVisitorFx,
});
