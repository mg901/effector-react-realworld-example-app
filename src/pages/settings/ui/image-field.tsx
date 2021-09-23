import { useField } from 'effector-forms';
import { Form } from 'shared/ui';
import { model } from '../model';

export const ImageField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.image);

  return (
    <Form.Group>
      <Form.Control
        name={name}
        placeholder="URL of profile picture"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </Form.Group>
  );
};
