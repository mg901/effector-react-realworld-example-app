import { useField } from 'effector-forms';
import { Form } from 'shared/ui';
import { model } from '../model';

export const PasswordField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.password);

  return (
    <Form.Group>
      <Form.Control
        autoComplete="current-password"
        name={name}
        placeholder="New Password"
        size="lg"
        type="password"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </Form.Group>
  );
};
