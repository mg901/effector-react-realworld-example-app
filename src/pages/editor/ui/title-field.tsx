import { useField } from 'effector-forms';
import { InputField } from 'ui';
import { form } from '../model';

export const TitleField: React.FC = () => {
  const { value, name, onChange } = useField(form.fields.title);

  return (
    <InputField
      className="form-control-lg"
      name={name}
      placeholder="Article Title"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
