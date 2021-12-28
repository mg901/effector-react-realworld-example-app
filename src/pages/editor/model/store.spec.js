import { fork, allSettled } from 'effector';
import { createArticleFx, $error } from './store';

describe('pages/editor/store', () => {
  it('should return an error if you submit a form with empty fields', async () => {
    const expected = {
      title: ["can't be blank", 'is too short (minimum is 1 character)'],
      body: ["can't be blank"],
      description: ["can't be blank", 'is too short (minimum is 1 character)'],
    };

    createArticleFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(createArticleFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected);
  });
});
