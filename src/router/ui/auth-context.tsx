import { createContext } from 'react';
import { useStore } from 'effector-react';
import { model } from 'shared/user';

const AuthContext = createContext({
  isAuth: false,
});

export const AuthProvider: React.FC = ({ children }) => {
  const isAuth = useStore(model.$isAuthorized);

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
};

export const AuthCosumer = AuthContext.Consumer;
