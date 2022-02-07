import { fork, allSettled } from 'effector';
import { addFx, $error } from './store';

describe('pages/article/store', () => {
  it('should return an error if you submit a form with empty fields', async () => {
    const expected = { errors: { body: ["can't be blank"] } };

    addFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(addFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected);
  });
});
