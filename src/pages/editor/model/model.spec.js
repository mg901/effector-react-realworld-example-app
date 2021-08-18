import { fork, allSettled } from 'effector';
import { domain, createArticleFx, $errors } from './model';

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

    const scope = fork(domain);
    await allSettled(createArticleFx, { scope });
    expect(scope.getState($errors)).toMatchObject(expected.response.data);
  });
});
