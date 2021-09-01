import { fork, allSettled } from 'effector';
import * as model from './model';

describe('library/router: ', () => {
  it('should update location', async () => {
    const expected = {
      hash: '',
      key: 'v2cvfx',
      pathname: '/home/your-feed',
      search: '?page=27',
    };

    const scope = fork(model.domain);

    await allSettled(model.locationUpdated, {
      scope,
      params: expected,
    });

    scope.getState(model.$location);
    expect(scope.getState(model.$location)).toMatchObject(expected);
    expect(scope.getState(model.$pathname)).toBe(expected.pathname);
    expect(scope.getState(model.$search)).toBe(expected.search);
  });
});
