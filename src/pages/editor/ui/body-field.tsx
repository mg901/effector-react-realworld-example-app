import { useField } from 'effector-forms';
import { Form } from 'shared/ui';
import { model } from '../model';

export const BodyField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.body);

  return (
    <Form.Group>
      <Form.Control
        as="textarea"
        name={name}
        placeholder="Write your article (in markdown)"
        rows={8}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
      />
    </Form.Group>
  );
};
