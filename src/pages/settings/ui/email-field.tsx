import { useField } from 'effector-forms';
import { Form } from 'shared/ui';
import { model } from '../model';

export const EmailField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.email);

  return (
    <Form.Group>
      <Form.Control
        name={name}
        placeholder="Email"
        size="lg"
        type="email"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </Form.Group>
  );
};
