import { Button } from 'shared/ui';
import { selectors, model } from '../model';

type Props = Readonly<{
  username: string;
}>;

export const FollowUser: React.FC<Props> = ({ username }) => {
  const following = selectors.useFollowing();
  const is = selectors.useIsNotCurrentUser();

  return !is ? null : (
    <Button
      className="action-btn btn-secondary"
      size="sm"
      onClick={model.toggleFollowing}
    >
      <i className="ion-plus-round" />
      &nbsp;{following ? 'Unfollow' : 'Follow'} {username}
    </Button>
  );
};
