import { root, fork, allSettled } from 'effector-root';
import { $user, $token, $isAuthorized } from 'modules/user/model';
import { signUpFx } from './index';

describe('pages/registration: ', () => {
  it('should sign in via email and password', async () => {
    const expected = {
      bio: '',
      createdAt: '',
      email: '',
      id: '1',
      image: '',
      token: 'token',
      updatedAt: '',
      username: 'John Doe',
    };

    const signUpFxMock = jest.fn(() => expected);

    const scope = fork(root, {
      handlers: new Map().set(signUpFx, signUpFxMock),
    });

    expect(scope.getState($isAuthorized)).toBeFalsy();

    await allSettled(signUpFx, { scope });

    expect(scope.getState($user)).toMatchObject(expected);
    expect(scope.getState($token)).toBe(expected.token);
    expect(scope.getState($isAuthorized)).toBeTruthy();
  });
});
