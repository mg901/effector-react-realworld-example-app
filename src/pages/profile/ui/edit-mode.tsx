import { Link } from 'react-router-dom';
import { Button } from 'shared/ui';
import { selectors } from '../model';

export const EditMode: React.FC = () => {
  const is = selectors.useIsCurrentUser();

  return !is ? null : (
    <Link to="/settings">
      <Button className="btn-sm btn-outline-secondary action-btn">
        <i className="ion-gear-a" /> Edit Profile Settings
      </Button>
    </Link>
  );
};
