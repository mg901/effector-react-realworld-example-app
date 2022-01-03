import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/router';
import { Button } from '@/shared/ui';
import * as model from '../model';

export const EditMode = () => {
  const isVisitor = model.selectors.useIsVisitor();

  return isVisitor ? (
    <Link to={ROUTES.settings}>
      <Button className="btn-outline-secondary action-btn" size="sm">
        <i className="ion-gear-a" /> Edit Profile Settings
      </Button>
    </Link>
  ) : null;
};
