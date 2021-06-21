import { root, fork, allSettled } from 'effector-root';
import * as user from 'shared/entities/user';
import { signUpFx, $errors } from './model';

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

    signUpFx.use(() => expected);

    const scope = fork(root);
    expect(scope.getState(user.model.$isAuthorized)).toBeFalsy();

    await allSettled(signUpFx, { scope });

    expect(scope.getState(user.model.$user)).toMatchObject(expected);
    expect(scope.getState(user.model.$token)).toBe(expected.token);
    expect(scope.getState(user.model.$isAuthorized)).toBeTruthy();
  });

  it('should return an error in case of unsuccessful registration', async () => {
    const expected = {
      response: {
        data: {
          errors: {
            email: ["can't be blank"],
            password: ["can't be blank"],
            username: [
              "can't be blank",
              'is too short (minimum is 1 character)',
            ],
          },
        },
      },
    };

    signUpFx.use(() => Promise.reject(expected));

    const scope = fork(root);
    await allSettled(signUpFx, { scope });
    expect(scope.getState($errors)).toMatchObject(expected.response.data);
  });
});