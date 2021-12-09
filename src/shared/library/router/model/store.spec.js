import { fork, allSettled } from 'effector';
import * as store from './store';

describe('library/router/store', () => {
  it('should update location', async () => {
    const expected = {
      hash: '',
      key: 'v2cvfx',
      pathname: '/home/your-feed',
      search: '?page=27',
    };

    const scope = fork();

    await allSettled(store.locationUpdated, {
      scope,
      params: expected,
    });

    scope.getState(store.$location);
    expect(scope.getState(store.$location)).toMatchObject(expected);
    expect(scope.getState(store.$locationPathname)).toBe(expected.pathname);
    expect(scope.getState(store.$locationSearch)).toBe(expected.search);
  });
});
