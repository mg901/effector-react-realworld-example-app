import { Button } from '@/shared/ui';
import * as model from '../model';

export const FollowUserButton = () => {
  const username = model.selectors.useProfileUsername();
  const following = model.selectors.useFollowing();
  const isOwnProfile = model.selectors.useIsOwnProfile();

  const handleToggle = () => {
    model.followToggled({ username, following });
  };

  return !isOwnProfile && username ? (
    <Button
      className="action-btn btn-secondary"
      size="sm"
      onClick={handleToggle}
    >
      <i className="ion-plus-round" />
      &nbsp;{following ? 'Unfollow' : 'Follow'} {username}
    </Button>
  ) : null;
};
