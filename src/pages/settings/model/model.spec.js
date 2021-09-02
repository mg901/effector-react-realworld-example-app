import { fork, allSettled } from 'effector';
import { model } from './model';

describe('pages/settings ', () => {
  it('should return an error if you submit a form with an empty password', async () => {
    const expected = {
      response: {
        data: { errors: { password: ["can't be blank"] } },
      },
    };

    model.changeUserDataFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(model.changeUserDataFx, { scope });
    expect(scope.getState(model.$errors)).toMatchObject(expected.response.data);
  });
});
