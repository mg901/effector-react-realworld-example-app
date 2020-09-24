import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { useGate } from 'effector-react';
import { Container, Row, NavItem, NavLink } from 'ui';
import { routes } from '../library';
import { model } from '../model';
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
          <div className="col-xs-12 col-md-10 offset-md-1">
            <ul className="nav nav-pills outline-active articles-toggle">
              <NavItem>
                <NavLink to={`${url}`}>My Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={`${url}/favorites`}>Favorited Articles</NavLink>
              </NavItem>
            </ul>

            <div>{renderRoutes(routes)}</div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
