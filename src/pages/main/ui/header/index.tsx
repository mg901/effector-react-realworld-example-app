import React from 'react';
import { APP_NAME } from '../../../../constants';
import { Header as HeaderView, Container, Logo } from '../../../../ui';
import { Nav } from '../nav';
import './index.css';

export const Header: React.FC = () => (
  <HeaderView>
    <Container className="header__inner">
      <Logo title={APP_NAME} />
      <Nav />
    </Container>
  </HeaderView>
);
