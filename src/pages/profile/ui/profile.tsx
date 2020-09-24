import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { useGate } from 'effector-react';
import { Container, Row } from 'ui';
import { routes } from '../library';
import { model } from '../model';
import { Tabs } from './tabs';
import { UserInfo } from './user-info';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps<{ url: string }>>;

export const ProfilePage: React.FC<Props> = ({ match: { url } }) => {
  useGate(model.PageGate, { url });

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
