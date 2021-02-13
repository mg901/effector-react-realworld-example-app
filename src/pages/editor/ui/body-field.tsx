import { useField } from 'effector-forms';
import { TextField } from 'ui';
import { form } from '../model';

export const BodyField: React.FC = () => {
  const { value, name, onChange } = useField(form.fields.body);

  return (
    <TextField
      name={name}
      placeholder="Write your article (in markdown)"
      rows={8}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
