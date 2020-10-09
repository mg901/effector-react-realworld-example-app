import { fork, allSettled } from 'effector';
import { signInFx } from '.';
import { $user } from '../../../modules/user/model';

import { root } from '../../../root';

describe('pages/login', () => {
  it('should sign in via email and password', async () => {
    const scope = fork(root, {
      handlers: new Map().set(signInFx, () => ({
        bio: '',
        createdAt: '',
        email: '',
        id: null,
        image: '',
        token: null,
        updatedAt: '',
        username: 'John Doe',
      })),
    });

    await allSettled(signInFx, { scope });

    expect(scope.getState($user)).toMatchObject({
      bio: '',
      createdAt: '',
      email: '',
      id: null,
      image: '',
      token: null,
      updatedAt: '',
      username: 'John Doe',
    });
  });
});
