import { fork, allSettled } from 'effector';
import { createArticleFx, $error } from './index';

describe('pages/editor ', () => {
  it('should return an error if you submit a form with empty fields', async () => {
    const expected = {
      response: {
        data: {
          errors: {
            title: ["can't be blank", 'is too short (minimum is 1 character)'],
            body: ["can't be blank"],
            description: [
              "can't be blank",
              'is too short (minimum is 1 character)',
            ],
          },
        },
      },
    };

    createArticleFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(createArticleFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected.response.data);
  });
});
