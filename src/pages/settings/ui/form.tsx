import { useEffect } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { Form } from '@/shared/ui';
import * as model from '../model';
import { ButtonSubmit } from './button-submit';

export const SettingsForm = () => {
  const { handleSubmit, register } = useForm();

  return (
    <Form onSubmit={handleSubmit}>
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

function useForm() {
  const user = model.selectors.useUser();
  const { handleSubmit, register, reset } = useReactHookForm({
    defaultValues: user,
  });

  useEffect(() => {
    reset(user);
  }, [reset, user]);

  const onSubmit = (data: model.types.FormValues) => {
    if (!data.password) {
      model.changeUserDataFx({ ...data, password: undefined });
    } else {
      model.changeUserDataFx(data);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
}
