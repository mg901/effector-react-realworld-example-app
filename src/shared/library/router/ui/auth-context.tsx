import { createContext } from 'react';
import { useStore } from 'effector-react';
import * as user from 'entities/user';

const AuthContext = createContext({
  isAuth: false,
});

export const AuthProvider: React.FC = ({ children }) => {
  const isAuth = useStore(user.model.$isAuthorized);

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
};

export const AuthCosumer = AuthContext.Consumer;
