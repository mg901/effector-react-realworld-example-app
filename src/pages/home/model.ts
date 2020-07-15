import { $location } from '../../router';

export const $$currentTag = $location.map((x) =>
  new URLSearchParams(x.search).get('name'),
);
