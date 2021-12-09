import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'shared/ui';
import * as settings from '../model';
import { ButtonSubmit } from './button-submit';

export const SettingsForm: React.FC = () => {
  const user = settings.selectors.useUser();
  const { handleSubmit, register, reset } = useForm({
    defaultValues: user,
  });

  useEffect(() => {
    reset(user);
  }, [reset, user]);

  return (
    <Form onSubmit={handleSubmit(settings.changeUserDataFx)}>
      <Form.Group>
        <Form.Control
          placeholder="URL of profile picture"
          {...register('image')}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          placeholder="Username"
          size="lg"
          {...register('username')}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Short bio about you"
          rows={8}
          size="lg"
          {...register('bio')}
        />
      </Form.Group>
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
          placeholder="New Password"
          size="lg"
          type="password"
          {...register('password')}
        />
      </Form.Group>
      <ButtonSubmit />
    </Form>
  );
};
