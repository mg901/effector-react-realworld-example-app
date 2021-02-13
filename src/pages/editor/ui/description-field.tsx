import { useField } from 'effector-forms';
import { InputField } from 'ui';
import { form } from '../model';

export const DescriptionField: React.FC = () => {
  const { value, name, onChange } = useField(form.fields.description);

  return (
    <InputField
      name={name}
      placeholder="What's this article about?"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
