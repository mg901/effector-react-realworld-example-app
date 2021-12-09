import { Container, Row } from 'shared/ui';
import { EditMode } from './edit-mode';
import { FollowUser } from './follow-user';
import { ProfileBio } from './profile-bio';
import { ProfileImage } from './profile-image';
import { ProfileTitle } from './profile-title';

export const ProfileInfo: React.FC = () => {
  return (
    <div className="user-info">
      <Container>
        <Row>
          <div className="col-xs-12 col-md-10 offset-md-1">
            <ProfileImage />
            <ProfileTitle />
            <ProfileBio />
            <EditMode />
            <FollowUser />
          </div>
        </Row>
      </Container>
    </div>
  );
};
