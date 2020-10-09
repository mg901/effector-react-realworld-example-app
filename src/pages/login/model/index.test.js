import { fork, allSettled } from 'effector';
import { signInFx } from '.';
import { $user } from '../../../modules/user/model';
import { root } from '../../../root';

describe('pages/login', () => {
  it('should sign in via email and password', async () => {
    const expected = {
      bio: '',
      createdAt: '',
      email: '',
      id: '123',
      image: '',
      token: 'token',
      updatedAt: '',
      username: 'John Doe',
    };

    const scope = fork(root, {
      handlers: new Map().set(signInFx, () => expected),
    });

    await allSettled(signInFx, { scope });

    expect(scope.getState($user)).toMatchObject(expected);
  });
});
