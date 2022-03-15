import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from 'effector-react';
import { ROUTES } from '@/shared/router';
import * as store from '../store/store';

export const useLogin = () => {
  const history = useHistory();
  const disabled = useStore(store.signInFx.pending);

  useEffect(() => {
    return store.signInFx.done.watch(() => {
      history.push(ROUTES.root);
    });
  }, [history]);

  useEffect(() => {
    return store.signInFx.watch(({ ctrl }) => {
      ctrl?.abort();
    });
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElem = event.currentTarget;

    store.signInFx({
      email: formElem.email.value,
      password: formElem.password.value,
    });
  };

  return {
    handleSubmit,
    disabled,
  };
};
