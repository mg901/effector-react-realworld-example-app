import { createEffect } from 'effector';
import { Location, History } from 'history';
import { history } from '../core/router';

export type SetPageToQueryParamArgs = {
  pathname: Location<History.PoorMansUnknown>['pathname'];
  search: Location<History.PoorMansUnknown>['search'];
  page: number;
};

export const setPageToQueryParamsFx = createEffect({
  handler: ({ pathname, search, page }: SetPageToQueryParamArgs) => {
    const params = new URLSearchParams(search);

    if (page > 1) {
      params.set('page', String(page));
    } else {
      params.delete('page');
    }

    history.replace(`${pathname}?${params}`);
  },
});

export const getPageFromQueryParamsFx = createEffect({
  handler: ({ search }: Location<History.PoorMansUnknown>) => {
    const page = new URLSearchParams(search).get('page') ?? 1;

    return page ? Number(page) : 1;
  },
});
