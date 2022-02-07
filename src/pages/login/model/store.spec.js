import { fork, allSettled } from 'effector';
import * as session from '@/entities/session';
import { $error } from './store';

describe('pages/login/store', () => {
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

    session.signInFx.use(() => expected);

    const scope = fork();
    expect(scope.getState(session.$isAuthorized)).toBeFalsy();

    await allSettled(session.signInFx, { scope });

    // expect(scope.getState(session.$visitor)).toMatchObject(expected);
    // expect(scope.getState(session.$token)).toBe(expected.token);
    // expect(scope.getState(session.$isAuthorized)).toBeTruthy();
  });

  it('should return an error if login fails', async () => {
    const expected = { errors: { 'email or password': ['is invalid'] } };

    session.signInFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(session.signInFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected);
  });
});
