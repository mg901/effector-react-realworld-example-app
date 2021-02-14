import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { Button } from 'ui';
import { $isCurrentUser } from '../model';

export const EditMode: React.FC = () => {
  const is = useStore($isCurrentUser);

  return !is ? null : (
    <Link to="/settings">
      <Button className="btn-sm btn-outline-secondary action-btn">
        <i className="ion-gear-a" /> Edit Profile Settings
      </Button>
    </Link>
  );
};
