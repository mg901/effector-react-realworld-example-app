import { useField } from 'effector-forms';
import { InputField } from 'shared/ui';
import { model } from '../model';

export const ImageField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.image);

  return (
    <InputField
      name={name}
      placeholder="URL of profile picture"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
