import { Button } from 'shared/ui';
import * as profile from '../model';

type Props = Readonly<{
  username: string;
}>;

export const FollowUser: React.FC<Props> = ({ username }) => {
  const whenFollow = profile.selectors.useWhenFollow();
  const is = profile.selectors.useIsAnotherUser();

  return !is ? null : (
    <Button
      className="btn-sm action-btn btn-secondary"
      onClick={profile.model.toggleFollowing}>
      <i className="ion-plus-round" />
      &nbsp;{whenFollow ? 'Unfollow' : 'Follow'} {username}
    </Button>
  );
};
