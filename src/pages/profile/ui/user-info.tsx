import React from 'react';
import { useStore } from 'effector-react';
import { Container, Row, Button } from 'ui';
import { model } from '../model';

export const UserInfo: React.FC = () => {
  const { image, username, bio } = useStore(model.$profile);
  const following = useStore(model.$following);

  return (
    <div className="user-info">
      <Container>
        <Row>
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img src={image} alt={username} className="user-img" />
            <h4>{username}</h4>
            {bio && <p>{bio}</p>}
            <Button
              className="btn-sm action-btn btn-secondary"
              onClick={model.toggleFollowing}>
              <i className="ion-plus-round" />
              &nbsp;{following ? 'Unfollow' : 'Follow'} {username}
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};
