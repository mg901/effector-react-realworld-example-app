import * as user from 'shared/entities/user';
import { Button } from 'shared/ui';

export const FormFooter: React.FC = () => {
  const { image, username } = user.selectors.useUser();

  return (
    <div className="card-footer">
      <img alt={username} className="comment-author-img" src={image} />
      <Button className="btn-sm btn-primary" type="submit">
        Post Comment
      </Button>
    </div>
  );
};
