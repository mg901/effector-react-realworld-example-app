// import { guard } from 'effector';
import { createGate } from 'effector-react';
// import * as session from '@/entities/session';

export const Gate = createGate();

// guard({
//   source: session.$isAuthorized,
//   filter: Boolean,
//   clock: Gate.open,
//   target: session.getVisitorFx,
// });
