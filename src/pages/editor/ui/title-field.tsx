import { useField } from 'effector-forms';
import { Form } from 'shared/ui';
import { form } from '../model/model';

export const TitleField: React.FC = () => {
  const { value, name, onChange } = useField(form.fields.title);

  return (
    <Form.Group>
      <Form.Control
        name={name}
        placeholder="Article Title"
        size="lg"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </Form.Group>
  );
};
