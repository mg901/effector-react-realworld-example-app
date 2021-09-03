import { fork, allSettled } from 'effector';
import * as user from 'entities/user';
import * as errorList from 'features/error-list';
import { signInFx } from './model';

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
    expect(scope.getState(user.model.$isAuthorized)).toBeFalsy();

    await allSettled(signInFx, { scope });

    expect(scope.getState(user.model.$user)).toMatchObject(expected);
    expect(scope.getState(user.model.$token)).toBe(expected.token);
    expect(scope.getState(user.model.$isAuthorized)).toBeTruthy();
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
    expect(scope.getState(errorList.model.$errors)).toMatchObject(
      expected.response.data,
    );
  });
});
