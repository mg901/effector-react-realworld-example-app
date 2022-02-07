import { fork, allSettled } from 'effector';
import * as session from '@/entities/session';
import { $error } from './store';

describe('pages/registration/store', () => {
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

    session.signUpFx.use(() => expected);

    const scope = fork();
    expect(scope.getState(session.$isAuthorized)).toBeFalsy();

    await allSettled(session.signUpFx, { scope });

    // expect(scope.getState(session.$visitor)).toMatchObject(expected);
    // expect(scope.getState(session.$token)).toBe(expected.token);
    // expect(scope.getState(session.$isAuthorized)).toBeTruthy();
  });

  it('should return an error in case of unsuccessful registration', async () => {
    const expected = {
      email: ["can't be blank"],
      password: ["can't be blank"],
      username: ["can't be blank", 'is too short (minimum is 1 character)'],
    };

    session.signUpFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(session.signUpFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected);
  });
});
