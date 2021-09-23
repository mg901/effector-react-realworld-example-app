import { useField } from 'effector-forms';
import { Form } from 'shared/ui';
import { model } from '../model';

export const DescriptionField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.description);

  return (
    <Form.Group>
      <Form.Control
        name={name}
        placeholder="What's this article about?"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </Form.Group>
  );
};
