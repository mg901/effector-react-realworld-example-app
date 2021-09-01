import { root, fork, allSettled } from 'effector';
import { locationUpdated, $location, $pathname, $search } from './model';

describe('library/router: ', () => {
  it('should update location', async () => {
    const expected = {
      hash: '',
      key: 'v2cvfx',
      pathname: '/home/your-feed',
      search: '?page=27',
    };

    const scope = fork(root);

    await allSettled(locationUpdated, {
      scope,
      params: expected,
    });

    scope.getState($location);
    expect(scope.getState($location)).toMatchObject(expected);
    expect(scope.getState($pathname)).toBe(expected.pathname);
    expect(scope.getState($search)).toBe(expected.search);
  });
});
