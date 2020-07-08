import { Location, History } from 'history';

export type GetFeedByTagPayload = {
  tag: string;
  page: number;
};

export type SetPageToQueryParamPayload = {
  pathname: Location<History.PoorMansUnknown>['pathname'];
  search: Location<History.PoorMansUnknown>['search'];
  page: number;
};
