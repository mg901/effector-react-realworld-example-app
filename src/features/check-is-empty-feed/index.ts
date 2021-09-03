import { combine, Store, Effect } from 'effector';
import { status } from 'patronum/status';

export const checkIsEmptyFeed = (
  $articles: Store<any>,
  effect: Effect<any, any, any>,
): Store<boolean> => {
  const $status = status({ effect });

  return combine(
    $status,
    $articles,
    (is, articles) => is === 'done' && articles.length === 0,
  );
};
