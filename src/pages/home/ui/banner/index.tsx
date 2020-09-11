import React from 'react';
import { useStore } from 'effector-react';
import { authModel } from '@core/auth';
import { Container } from '@ui';
import { APP_NAME } from '../../../../config';
import * as css from './index.css';

export const Banner: React.FC = () => {
  const isAuth = useStore(authModel.$isAuthorized);

  return isAuth ? null : (
    <Container>
      <p className={css.title}>{APP_NAME.toLowerCase()}</p>
      <p>A place to share your knowledge.</p>
    </Container>
  );
};
