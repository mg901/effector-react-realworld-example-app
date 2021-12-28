import { fork, allSettled } from 'effector';
import { addCommentFx, $error } from './store';

describe('pages/article/store', () => {
  it('should return an error if you submit a form with empty fields', async () => {
    const expected = { errors: { body: ["can't be blank"] } };

    addCommentFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(addCommentFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected);
  });
});
