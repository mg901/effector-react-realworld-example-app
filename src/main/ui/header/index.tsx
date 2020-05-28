import React from 'react';
import { APP_NAME } from '../../../constants';
import { Header as HeaderView, Logo } from '../../../ui';
import { Nav } from '../nav';
import './index.css';

export const Header: React.FC = () => (
  <HeaderView>
    <Logo title={APP_NAME} />
    <Nav />
  </HeaderView>
);
