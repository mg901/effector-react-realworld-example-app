import React from 'react';
import { useStore } from 'effector-react';
import { $$isAuthorized } from '../../auth';

type Props = {
  check: 'anon' | 'auth';
};

export const AuthBranch: React.FC<Props> = ({ check, children }) => {
  const isAuth = useStore($$isAuthorized);

  if (isAuth === true && check === 'auth') {
    return <>{children}</>;
  }
  if (isAuth === false && check === 'anon') {
    return <>{children}</>;
  }

  return null;
};
