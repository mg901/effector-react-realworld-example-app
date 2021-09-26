import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'shared/ui';
import { model } from './model';
import { Routes } from './routes';
import { Tabs } from './ui/tabs';
import { UserInfo } from './ui/user-info';

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    model.getProfileFx(username);
  }, [username]);

  return (
    <div className="profile-page">
      <UserInfo />
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
