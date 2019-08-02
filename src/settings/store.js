import { createEffect } from 'effector';
import { auth } from '../agent';

export const asyncUpdateUserData = createEffect();

asyncUpdateUserData.use((user) => auth.save(user));
