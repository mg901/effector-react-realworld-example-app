import { createEvent, sample } from 'effector-root';
import * as router from 'shared/library/router';

export const createPagination = () => {
  const currentPageWasSet = createEvent<number>();

  const $currentPage = router.model.$search.map((search) => {
    const page = new URLSearchParams(search).get('page') ?? 1;

    return Number(page) - 1;
  });

  sample({
    source: router.model.$pathname,
    clock: currentPageWasSet,
    fn: (path, page) => ({ path, page }),
  }).watch(({ path, page }) => {
    router.history.replace(`${path}?page=${page}`);
  });

  return {
    currentPageWasSet,
    $currentPage,
  };
};
