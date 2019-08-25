import { getGlobalFeed, getUserFeed, getFeedByTag } from './model.events';
import { $getGlobalFeed, $getUserFeed, $feedByTag } from './model.store';

$getGlobalFeed.on(getGlobalFeed.done, (state, { result }) => ({
  ...state,
  ...result,
}));

$getUserFeed.on(getUserFeed.done, (state, { result }) => ({
  ...state,
  ...result,
}));

$feedByTag.on(getFeedByTag.done, (state, { result }) => ({
  ...state,
  ...result,
}));
