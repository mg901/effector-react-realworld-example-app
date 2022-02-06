import { useRef, useLayoutEffect } from 'react';
import { Form } from '@/shared/ui';
import * as model from '../model';
import { ButtonSubmit } from './button-submit';

export const RegistrationForm = () => {
  const inputElem = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    inputElem.current?.focus();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    model.formSubmitted({
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          name="username"
          placeholder="Username"
          ref={inputElem}
          size="lg"
          type="text"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="form-control-lg"
          name="email"
          placeholder="Email"
          size="lg"
          type="email"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          autoComplete="new-password"
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
