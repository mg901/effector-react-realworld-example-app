import { root, fork, allSettled } from 'effector-root';
import { fetchCommentFx, $error } from './model';

describe('pages/article  ', () => {
  it('should return an error if you submit a form with empty fields', async () => {
    const expected = {
      response: {
        data: { errors: { body: ["can't be blank"] } },
      },
    };

    fetchCommentFx.use(() => Promise.reject(expected));

    const scope = fork(root);
    await allSettled(fetchCommentFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected.response.data);
  });
});
