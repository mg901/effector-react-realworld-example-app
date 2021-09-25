import { fork, allSettled } from 'effector';
import * as errorList from 'widgets/error-list';
import { getCommentFx } from './model';

describe('pages/article  ', () => {
  it('should return an error if you submit a form with empty fields', async () => {
    const expected = {
      response: {
        data: { errors: { body: ["can't be blank"] } },
      },
    };

    getCommentFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(getCommentFx, { scope });
    expect(scope.getState(errorList.model.$errors)).toMatchObject(
      expected.response.data,
    );
  });
});
