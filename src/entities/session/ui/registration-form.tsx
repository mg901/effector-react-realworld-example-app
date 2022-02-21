import { useRef, useLayoutEffect } from 'react';
import { Form } from '@/shared/ui';
import * as session from '../model';
import { ButtonSubmit } from './button-submit';
import { EmailField } from './email-field';
import { PasswordField } from './password-field';

export const RegistrationForm = () => {
  const inputElem = useRef<HTMLInputElement>(null);
  const { handleSubmit, disabled } = session.useRegistration();

  useLayoutEffect(() => {
    inputElem.current?.focus();
  }, []);

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
        <EmailField />
      </Form.Group>
      <Form.Group>
        <PasswordField />
      </Form.Group>
      <ButtonSubmit disabled={disabled} />
    </Form>
  );
};
