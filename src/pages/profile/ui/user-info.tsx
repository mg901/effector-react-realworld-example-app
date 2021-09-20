import { Container, Row } from 'shared/ui';
import { selectors } from '../model';
import { EditMode } from './edit-mode';
import { FollowUser } from './follow-user';

export const UserInfo: React.FC = () => {
  const { image, username, bio } = selectors.useProfile();

  return (
    <div className="user-info">
      <Container>
        <Row>
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img alt={username} className="user-img" src={image} />
            <h4>{username}</h4>
            {bio && <p>{bio}</p>}

            <EditMode />
            <FollowUser username={username} />
          </div>
        </Row>
      </Container>
    </div>
  );
};
