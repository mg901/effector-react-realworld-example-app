import { fork, allSettled } from 'effector';
import * as visitor from 'entities/visitor';
import { signInFx, $error } from './login';

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
    expect(scope.getState(visitor.model.$isAuthorized)).toBeFalsy();

    await allSettled(signInFx, { scope });

    expect(scope.getState(visitor.model.$visitor)).toMatchObject(expected);
    expect(scope.getState(visitor.model.$token)).toBe(expected.token);
    expect(scope.getState(visitor.model.$isAuthorized)).toBeTruthy();
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
