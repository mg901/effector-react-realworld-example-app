import { memo } from 'react';
import { Container, Row } from '@/shared/ui';
import { EditMode } from './edit-mode';
import { FollowUserButton } from './follow-user-button';
import { ProfileBio } from './profile-bio';
import { ProfileImage } from './profile-image';
import { ProfileTitle } from './profile-title';

export const ProfileInfo = memo(() => {
  return (
    <div className="user-info">
      <Container>
        <Row>
          <div className="col-xs-12 col-md-10 offset-md-1">
            <ProfileImage />
            <ProfileTitle />
            <ProfileBio />
            <EditMode />
            <FollowUserButton />
          </div>
        </Row>
      </Container>
    </div>
  );
});

ProfileInfo.displayName = 'ProfileInfo';
