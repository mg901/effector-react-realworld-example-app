import { fork, allSettled } from 'effector';
import { $user, $token, $isAuthorized } from 'shared/user/model';
import { signInFx, $error } from './index';

describe('pages/login: ', () => {
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

    signInFx.use(() => expected);

    const scope = fork();
    expect(scope.getState($isAuthorized)).toBeFalsy();

    await allSettled(signInFx, { scope });

    expect(scope.getState($user)).toMatchObject(expected);
    expect(scope.getState($token)).toBe(expected.token);
    expect(scope.getState($isAuthorized)).toBeTruthy();
  });

  it('should return an error if login fails', async () => {
    const expected = {
      response: {
        data: { errors: { 'email or password': ['is invalid'] } },
      },
    };

    signInFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(signInFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected.response.data);
  });
});
