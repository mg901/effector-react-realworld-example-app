import React from 'react';
import { useStore } from 'effector-react';
import { $isAuthorized } from '../../../features/user';

type Props = Readonly<{
  check: 'anon' | 'auth';
}>;

export const AuthBranch: React.FC<Props> = ({ check, children }) => {
  const isAuth = useStore($isAuthorized);

  if (isAuth === true && check === 'auth') {
    return <>{children}</>;
  }
  if (isAuth === false && check === 'anon') {
    return <>{children}</>;
  }

  return null;
};
