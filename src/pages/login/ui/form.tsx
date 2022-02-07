import { useRef, useLayoutEffect } from 'react';
import { Form } from '@/shared/ui';
import * as session from '@/entities/session';
import { ButtonSubmit } from './button-submit';

export const LoginForm = () => {
  const inputElem = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    inputElem.current?.focus();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElem = event.currentTarget;

    session.signInFx({
      email: formElem.email.value,
      password: formElem.password.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          name="email"
          placeholder="Email"
          ref={inputElem}
          size="lg"
          type="email"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          autoComplete="current-password"
          name="password"
          placeholder="Password"
          size="lg"
          type="password"
        />
      </Form.Group>
      <ButtonSubmit />
    </Form>
  );
};
