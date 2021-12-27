import { useForm } from 'react-hook-form';
import { Form } from 'shared/ui';
import * as model from '../model';
import { ButtonSubmit } from './button-submit';

export const RegistrationForm = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(model.signUpFx)}>
      <Form.Group>
        <Form.Control
          placeholder="Username"
          size="lg"
          type="text"
          {...register('username')}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          className="form-control-lg"
          placeholder="Email"
          size="lg"
          type="email"
          {...register('email')}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          autoComplete="current-password"
          placeholder="Password"
          size="lg"
          type="password"
          {...register('password')}
        />
      </Form.Group>
      <ButtonSubmit />
    </Form>
  );
};
