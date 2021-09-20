import { createEvent, createStore, restore, Event, Store } from 'effector';
import { persist } from 'effector-storage/query';

interface Options {
  pageSize?: number;
}

type Output = {
  paginationChanged: Event<number>;
  $pageSize: Store<number>;
  $pageNumber: Store<number>;
  $currentPage: Store<number>;
};

export const createPagination = (options: Options = {}): Output => {
  const paginationChanged = createEvent<number>();

  const $pageSize = createStore<number>(options.pageSize ?? 10);
  const $pageCount = restore(paginationChanged, 1);

  persist({
    store: $pageCount,
    key: 'page',
  });

  const $currentPage = $pageCount.map((x) => x - 1);

  return {
    paginationChanged,
    $pageSize,
    $pageNumber: $pageCount,
    $currentPage,
  };
};
