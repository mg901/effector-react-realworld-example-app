import { root, fork, allSettled } from 'effector-root';
import { changeUserDataFx, $errors } from './model';

describe('pages/settings ', () => {
  it('should return an error if you submit a form with an empty password', async () => {
    const expected = {
      response: {
        data: { errors: { password: ["can't be blank"] } },
      },
    };

    changeUserDataFx.use(() => Promise.reject(expected));

    const scope = fork(root);
    await allSettled(changeUserDataFx, { scope });
    expect(scope.getState($errors)).toMatchObject(expected.response.data);
  });
});
