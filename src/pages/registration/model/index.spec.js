import { root, fork, allSettled } from 'effector-root';
import { $user, $token, $isAuthorized } from 'shared-modules/user/model';
import { signUpFx, $errors } from './index';

describe('pages/registration: ', () => {
  it('should successfully register via username, email and password', async () => {
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

  it('should return a message in case of unsuccessful registration', async () => {
    const expected = {
      errors: {
        'email or password': ['is invalid'],
      },
    };

    signUpFx.use(() => Promise.reject(expected));

    const scope = fork(root);
    await allSettled(signUpFx, { scope });
    expect(scope.getState($errors)).toMatchObject(expected);
  });
});
