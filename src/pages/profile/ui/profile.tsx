import React from 'react';
import { useStore, useGate } from 'effector-react';
import { NavLink as Link } from 'react-router-dom';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { Container, Button, NavLink } from '../../../ui';
import { ProfileGate, $profile } from '../model';
import { routes } from '../router.config';
import '../init';

type Props = RouteConfigComponentProps<{ url: string }>;

export const Profile: React.FC<Props> = ({ match: { url } }) => {
  useGate(ProfileGate, { url });
  const { image } = useStore($profile);

  return (
    <Container>
      <div>
        <img src={image} alt="user-img" />
        <Button>follow</Button>
      </div>
      <NavLink as={Link} to={`${url}`}>
        My Articles
      </NavLink>
      <NavLink as={Link} to={`${url}/favorites`}>
        Favorited Articles
      </NavLink>
      <div>{renderRoutes(routes)}</div>
    </Container>
  );
};
