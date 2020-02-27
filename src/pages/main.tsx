import React from 'react';
import { useStore } from 'effector-react';
import { $token } from '../modules/auth';
import { Banner } from '../ui';

export const Main: React.FC = () => {
  const token = useStore($token);

  return (
    <>
      <Banner token={token} />
    </>
  );
};
