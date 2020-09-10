import { createEffect } from 'effector';

export const getPageFromQueryParamsFx = createEffect((search: string) => {
  const page = new URLSearchParams(search).get('page') ?? 1;

  return page ? Number(page) : 1;
});
