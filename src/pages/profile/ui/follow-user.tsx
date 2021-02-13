import { useStore } from 'effector-react';
import { Button } from 'ui';
import * as model from '../model';

type Props = Readonly<{
  username: string;
}>;

export const FollowUser: React.FC<Props> = ({ username }) => {
  const following = useStore(model.$following);
  const is = useStore(model.$isAnotherUser);

  return !is ? null : (
    <Button
      className="btn-sm action-btn btn-secondary"
      onClick={model.toggleFollowing}>
      <i className="ion-plus-round" />
      &nbsp;{following ? 'Unfollow' : 'Follow'} {username}
    </Button>
  );
};
