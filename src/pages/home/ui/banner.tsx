import React from 'react';
import { useStore } from 'effector-react';
import { APP_NAME } from 'config';
import * as auth from 'features/user';
import { Container } from 'ui';

export const Banner: React.FC = () => {
  const isAuth = useStore(auth.model.$isAuthorized);

  return isAuth ? null : (
    <div className="banner">
      <Container>
        <h1 className="logo-font">{APP_NAME.toLowerCase()}</h1>
        <p>A place to share your knowledge.</p>
      </Container>
    </div>
  );
};
