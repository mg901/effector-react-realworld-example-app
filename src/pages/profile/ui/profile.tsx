import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { useGate } from 'effector-react';
import { Container, Row } from '../../../ui';
import { Gate } from '../model';
import { routes } from '../router.config';
import { Tabs } from './tabs';
import { UserInfo } from './user-info';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps<{ url: string }>>;

export const ProfilePage: React.FC<Props> = ({ match: { url } }) => {
  useGate(Gate, { url });

  return (
    <div className="profile-page">
      <UserInfo />
      <Container>
        <Row>
          <Tabs path={url}>
            <div>{renderRoutes(routes)}</div>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};
