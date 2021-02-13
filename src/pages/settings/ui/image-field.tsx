import { useField } from 'effector-forms';
import { InputField } from 'ui';
import { form } from '../model';

export const ImageField: React.FC = () => {
  const { value, name, onChange } = useField(form.fields.image);

  return (
    <InputField
      name={name}
      placeholder="URL of profile picture"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
