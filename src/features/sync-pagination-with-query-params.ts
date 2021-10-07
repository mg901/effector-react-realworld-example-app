import { createEvent, restore } from 'effector';
import { persist } from 'effector-storage/query';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function syncPaginationWithQueryParams() {
  const queryParamsSetted = createEvent<number>();
  const $queryParam = restore(queryParamsSetted.map(String), '1');

  const $pageNumber = $queryParam.map(Number);

  persist({
    store: $queryParam,
    key: 'page',
  });

  const $pageIndex = $pageNumber.map((x) => x - 1);

  return {
    queryParamsSetted,
    $pageNumber,
    $pageIndex,
  };
}
