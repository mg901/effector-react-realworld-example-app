import React from 'react';
import { useStore } from 'effector-react';
import * as user from 'features/current-user';
import { Button } from 'ui';

export const FormFooter: React.FC = () => {
  const { image, username } = useStore(user.model.$user);

  return (
    <div className="card-footer">
      <img src={image} className="comment-author-img" alt={username} />
      <Button type="submit" className="btn-sm btn-primary">
        Post Comment
      </Button>
    </div>
  );
};
