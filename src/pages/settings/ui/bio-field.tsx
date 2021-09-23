import { useField } from 'effector-forms';
import { Form } from 'shared/ui';
import { model } from '../model';

export const BioField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.bio);

  return (
    <Form.Group>
      <Form.Control
        as="textarea"
        name={name}
        placeholder="Short bio about you"
        rows={8}
        size="lg"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
      />
    </Form.Group>
  );
};
