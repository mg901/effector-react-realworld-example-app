import React from 'react';
import { useStore } from 'effector-react';
import { APP_NAME } from '../../../config';
import { model } from '../../../modules/user';
import { Banner as UIBanner, Container } from '../../../ui';

export const Banner: React.FC = () => {
  const isAuth = useStore(model.$isAuthorized);

  return isAuth ? null : (
    <UIBanner>
      <Container>
        <h1 className="logo-font">{APP_NAME.toLowerCase()}</h1>
        <p>A place to share your Effector knowledge.</p>
      </Container>
    </UIBanner>
  );
};
