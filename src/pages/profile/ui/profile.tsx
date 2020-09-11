import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { NavLink as Link } from 'react-router-dom';
import { useStore, useGate } from 'effector-react';
import { Container, Button, NavLink } from '@ui';
import { profileModel } from '../profile-model';
import { routes } from '../router.config';
import '../profile-model/init';

type Props = RouteConfigComponentProps<{ url: string }>;

export const Profile: React.FC<Props> = ({ match: { url } }) => {
  useGate(profileModel.ProfileGate, { url });
  const { image } = useStore(profileModel.$profile);

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
