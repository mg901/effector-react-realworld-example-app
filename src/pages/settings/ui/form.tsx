import { useLayoutEffect, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from '@/shared/ui';
import * as user from '@/entities/user';
import * as model from '../model';

export const SettingsForm = () => {
  const fields = model.selectors.useEditableFields();
  const { handleSubmit, register, setFocus, reset } = useForm({
    defaultValues: fields,
  });

  useLayoutEffect(() => {
    setFocus('image');
  });

  useEffect(() => {
    reset(fields);
  }, [reset, fields]);

  return (
    <Form onSubmit={handleSubmit(model.submitForm)}>
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

function ButtonSubmit() {
  const disabled = user.selectors.useUpdateUserLoading();

  return (
    <Button
      className="btn-primary pull-xs-right"
      disabled={disabled}
      size="lg"
      type="submit"
    >
      Update Settings
    </Button>
  );
}
