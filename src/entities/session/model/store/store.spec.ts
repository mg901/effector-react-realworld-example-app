// import { fork, allSettled } from 'effector';
// import * as store from './store';

describe('session/login', () => {
  it('should sign in via email and password', async () => {
    // const expected = {
    //   bio: '',
    //   createdAt: '',
    //   email: '',
    //   id: '1',
    //   image: '',
    //   token: 'token',
    //   updatedAt: '',
    //   username: 'John Doe',
    // };
    // store.signInFx.use(() => expected);
    // const scope = fork();
    // expect(scope.getState(store.$isAuthorized)).toBeFalsy();
    // await allSettled(store.signInFx, { scope });
    // expect(scope.getState(store.$visitor)).toMatchObject(expected);
    // expect(scope.getState(store.$token)).toBe(expected.token);
    // expect(scope.getState(store.$isAuthorized)).toBeTruthy();
  });

  it('should return an error if login fails', async () => {
    // const expected = { errors: { 'email or password': ['is invalid'] } };
    // store.signInFx.use(() => Promise.reject(expected));
    // const scope = fork();
    // await allSettled(store.signInFx, { scope });
    // expect(scope.getState(store.$error)).toMatchObject(expected);
  });
});

describe('session/registration', () => {
  it('should successfully register via username, email and password', async () => {
    // const expected = {
    //   bio: '',
    //   createdAt: '',
    //   email: '',
    //   id: '1',
    //   image: '',
    //   token: 'token',
    //   updatedAt: '',
    //   username: 'John Doe',
    // };
    // // store.signUpFx.use(() => expected);
    // const scope = fork({
    //   handlers: new Map([[store.signUpFx, jest.fn()]]),
    // });
    // expect(scope.getState(store.$isAuthorized)).toBeFalsy();
    // await allSettled(store.signUpFx, { scope });
    // expect(scope.getState(store.$visitor)).toMatchObject(expected);
    // expect(scope.getState(store.$token)).toBe(expected.token);
    // expect(scope.getState(store.$isAuthorized)).toBeTruthy();
  });

  it('should return an error if login fails', async () => {
    // const expected = {
    //   email: ["can't be blank"],
    //   password: ["can't be blank"],
    //   username: ["can't be blank", 'is too short (minimum is 1 character)'],
    // };
    // store.signUpFx.use(() => Promise.reject(expected));
    // const scope = fork();
    // await allSettled(store.signUpFx, { scope });
    // expect(scope.getState(store.$error)).toMatchObject(expected);
  });
});
