import { combine, Store, Effect } from 'effector';
import { status } from 'patronum/status';

export const checkIsEmptyFeed = (
  $articles: Store<any>,
  effect: Effect<any, any, any>,
): Store<boolean> => {
  const $status = status({
    effect,
  });

  return combine(
    $status,
    $articles,
    (st, articles) => (st === 'done' || st === 'fail') && articles.length === 0,
  );
};
