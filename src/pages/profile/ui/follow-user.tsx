import { Button } from 'shared/ui';
import { selectors, model } from '../model';

type Props = Readonly<{
  username: string;
}>;

export const FollowUser: React.FC<Props> = ({ username }) => {
  const canFollow = selectors.useCanFollow();
  const is = selectors.useIsNotCurrentUser();

  const handleClick = () => {
    if (canFollow) {
      model.unsubscribeFx(username);
    } else {
      model.subscribeFx(username);
    }
  };

  return !is ? null : (
    <Button
      className="action-btn btn-secondary"
      size="sm"
      onClick={handleClick}
    >
      <i className="ion-plus-round" />
      &nbsp;{canFollow ? 'Unfollow' : 'Follow'} {username}
    </Button>
  );
};
