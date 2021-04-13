import { useParams } from 'react-router-dom';
import { useGate } from 'effector-react';
import { Container, Row } from 'ui';
import { Gate } from './model';
import { Routes } from './ui/routes';
import { Tabs } from './ui/tabs';
import { UserInfo } from './ui/user-info';

type Params = Readonly<{
  url: string;
}>;

const Profile: React.FC = () => {
  const { url } = useParams<Params>();
  useGate(Gate, { url });

  return (
    <div className="profile-page">
      <UserInfo />
      <Container>
        <Row>
          <Tabs path={url}>
            <Routes />
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
