import { useEffect } from 'react';
import { useParams } from 'shared/library/router';
import { Container, Row } from 'shared/ui';
import * as model from './model';
import { Routes } from './routes';
import { ProfileInfo } from './ui/profile-info';
import { Tabs } from './ui/tabs';

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    if (username) {
      model.getProfileFx(username);
    }
  }, [username]);

  return (
    <div className="profile-page">
      <ProfileInfo />
      <Container>
        <Row>
          <Tabs>
            <Routes />
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
