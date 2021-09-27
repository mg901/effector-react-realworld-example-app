import { createEvent, createStore } from 'effector';
import { persist } from 'effector-storage/query';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createPagination({ pageSize = 10 } = {}) {
  const paginationChanged = createEvent<number>();

  const $pageSize = createStore<number>(pageSize);
  const $queryPage = createStore('1').on(
    paginationChanged.map(String),
    (_, payload) => payload,
  );
  const $pageNumber = $queryPage.map(Number);

  persist({
    store: $queryPage,
    key: 'page',
  });

  const $pageIndex = $pageNumber.map((x) => x - 1);

  return {
    paginationChanged,
    $pageSize,
    $pageNumber,
    $pageIndex,
  };
}
