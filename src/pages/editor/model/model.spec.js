import { fork, allSettled } from 'effector';
import * as errorList from 'widgets/error-list';
import { createArticleFx } from './model';

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
    expect(scope.getState(errorList.model.$errors)).toMatchObject(
      expected.response.data,
    );
  });
});
