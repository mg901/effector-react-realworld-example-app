import { Button } from 'shared/ui';
import * as model from '../model';

export const FollowUser: React.FC = () => {
  const username = model.selectors.useUserName();
  const following = model.selectors.useFollowing();
  const isVisitor = model.selectors.useIsVisitor();

  const handleToggle = () => {
    model.followToggled({ username, following });
  };

  return isVisitor ? null : (
    <Button
      className="action-btn btn-secondary"
      size="sm"
      onClick={handleToggle}
    >
      <i className="ion-plus-round" />
      &nbsp;{following ? 'Unfollow' : 'Follow'} {username}
    </Button>
  );
};
