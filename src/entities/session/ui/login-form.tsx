import { useRef, useLayoutEffect } from 'react';

import { Form } from '@/shared/ui';
import * as session from '../model';
import { ButtonSubmit } from './button-submit';
import { EmailField } from './email-field';
import { PasswordField } from './password-field';

export const LoginForm = () => {
  const inputElem = useRef<HTMLInputElement>(null);
  const { handleSubmit, disabled } = session.useLogin();

  useLayoutEffect(() => {
    inputElem.current?.focus();
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <EmailField ref={inputElem} />
      </Form.Group>
      <Form.Group>
        <PasswordField />
      </Form.Group>
      <ButtonSubmit disabled={disabled} />
    </Form>
  );
};
