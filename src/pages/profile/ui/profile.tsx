import React from 'react';
import { useGate, useStore } from 'effector-react';
import { NavLink as Link } from 'react-router-dom';
import { Container, Button, NavLink } from '../../../ui';
import { PageGate, $profile } from '../model';
import '../init';

export const ProfilePage: React.FC = () => {
  useGate(PageGate);
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
        My Articles
      </NavLink>
    </Container>
  );
};
