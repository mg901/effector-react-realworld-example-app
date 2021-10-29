import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useGate } from 'effector-react';
import { Container, Row, Spinner } from 'shared/ui';
import { model } from './model';
import { Routes } from './routes';
import { Tabs } from './ui/tabs';
import { UserInfo } from './ui/user-info';

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  useGate(model.Gate, { username });

  return (
    <div className="profile-page">
      <UserInfo />
      <Container>
        <Row>
          <Tabs>
            <Suspense fallback={<Spinner loading />}>
              <Routes />
            </Suspense>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
