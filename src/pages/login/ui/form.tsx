import { useForm } from 'react-hook-form';
import { Form } from 'shared/ui';
import * as model from '../model';
import { ButtonSubmit } from './button-submit';

export const LoginForm = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(model.signInFx)}>
      <Form.Group>
        <Form.Control
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
