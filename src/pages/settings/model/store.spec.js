import { fork, allSettled } from 'effector';
import { changeUserDataFx, $error } from './store';

describe('pages/settings/store', () => {
  it('should return an error if you submit a form with an empty password', async () => {
    const expected = { errors: { password: ["can't be blank"] } };

    changeUserDataFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(changeUserDataFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected);
  });
});
