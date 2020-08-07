import React from 'react';
import { useGate, useStore } from 'effector-react';
import { NavLink as Link } from 'react-router-dom';
import { Container, Button, NavLink } from '../../../ui';
import { renderRoutes } from '../../../router';
import { ProfileGate, $profile } from '../model';
import { routes } from '../router.config';
import '../init';

export const Profile: React.FC = () => {
  useGate(ProfileGate);
  const { image, username } = useStore($profile);

  return (
    <Container>
      <div>
        <img src={image} alt="user-img" />
        <Button>follow</Button>
      </div>
      <NavLink as={Link} to={`/@${username}`}>
        My Articles
      </NavLink>
      <NavLink as={Link} to={`/@${username}/favorites`}>
        Favorited Articles
      </NavLink>
      <div>{renderRoutes(routes)}</div>
    </Container>
  );
};
