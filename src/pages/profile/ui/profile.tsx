import React from 'react';
import { useGate } from 'effector-react';
import { PageGate } from '../model';
import '../init';

export const ProfilePage: React.FC = () => {
  useGate(PageGate);

  return <h1>Profile</h1>;
};
