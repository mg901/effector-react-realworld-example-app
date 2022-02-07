import { fork, allSettled } from 'effector';
import * as article from '@/entities/foo';
import { $error } from './store';

describe('pages/editor/store', () => {
  it('should return an error if you submit a form with empty fields', async () => {
    const expected = {
      title: ["can't be blank", 'is too short (minimum is 1 character)'],
      body: ["can't be blank"],
      description: ["can't be blank", 'is too short (minimum is 1 character)'],
    };

    article.createFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(article.createFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected);
  });
});
