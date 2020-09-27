import React from 'react';
import { useStore } from 'effector-react';
import * as user from 'features/user';
import { Button } from 'ui';

export const FormFooter: React.FC = () => {
  const { image, username } = useStore(user.model.$user);

  return (
    <div className="card-footer">
      <img alt={username} className="comment-author-img" src={image} />
      <Button className="btn-sm btn-primary" type="submit">
        Post Comment
      </Button>
    </div>
  );
};
