import { Link } from 'react-router-dom';
import { Button } from 'shared/ui';
import * as model from '../model';

export const EditMode: React.FC = () => {
  const isVisitor = model.selectors.useIsVisitor();

  return isVisitor ? (
    <Link to="/settings">
      <Button className="btn-outline-secondary action-btn" size="sm">
        <i className="ion-gear-a" /> Edit Profile Settings
      </Button>
    </Link>
  ) : null;
};
