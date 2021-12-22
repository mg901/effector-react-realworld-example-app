import * as visitor from 'entities/visitor';
import { Button } from 'shared/ui';

export const Footer: React.FC = () => {
  const { image, username } = visitor.selectors.useVisitor();

  return (
    <div className="card-footer">
      <img alt={username} className="comment-author-img" src={image} />
      <Button className="btn-primary" size="sm" type="submit">
        Post Comment
      </Button>
    </div>
  );
};
