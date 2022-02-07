import { fork, allSettled } from 'effector';
import * as session from '@/entities/session';
import { $error } from './store';

describe('pages/settings/store', () => {
  it('should return an error if you submit a form with an empty password', async () => {
    const expected = { errors: { password: ["can't be blank"] } };

    session.updateVisitorFx.use(() => Promise.reject(expected));

    const scope = fork();
    await allSettled(session.updateVisitorFx, { scope });
    expect(scope.getState($error)).toMatchObject(expected);
  });
});
