import { Form } from '@/shared/ui';
import * as model from '../model';
import { ButtonSubmit } from './button-submit';

export const RegistrationForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    model.formSubmitted({
      username: event.currentTarget.username.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          name="username"
          placeholder="Username"
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
