import { fork, allSettled } from 'effector';
import * as user from 'entities/user';
import { model } from './index';

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

    model.signInFx.use(() => expected);

    const scope = fork();
    expect(scope.getState(user.model.$isAuthorized)).toBeFalsy();

    await allSettled(model.signInFx, { scope });

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

    model.signInFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(model.signInFx, { scope });
    expect(scope.getState(model.$errors)).toMatchObject(expected.response.data);
  });
});
