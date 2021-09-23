import { useField } from 'effector-forms';
import { Form } from 'shared/ui';
import { model } from '../model';

export const UsernameField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.username);

  return (
    <Form.Group>
      <Form.Control
        name={name}
        placeholder="Username"
        size="lg"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </Form.Group>
  );
};
