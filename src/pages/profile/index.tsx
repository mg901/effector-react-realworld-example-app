import { useParams } from 'react-router-dom';
import { useGate } from 'effector-react';
import { Container, Row } from 'shared/ui';
import { model } from './model';
import { Routes } from './routes';
import { Tabs, UserInfo } from './ui';

type Params = Readonly<{
  username: string;
}>;

const Profile: React.FC = () => {
  const params = useParams<Params>();
  useGate(model.Gate, params);

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

export default Profile;
