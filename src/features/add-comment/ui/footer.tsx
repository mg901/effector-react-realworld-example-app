import { Avatar } from '@/entities/visitor';
import { Button } from '@/shared/ui';

export const Footer = () => {
  return (
    <div className="card-footer">
      <Avatar className="comment-author-img" />
      <Button className="btn-primary" size="sm" type="submit">
        Post Comment
      </Button>
    </div>
  );
};
