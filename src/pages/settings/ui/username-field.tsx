import { useField } from 'effector-forms';
import { InputField } from 'ui';
import { form } from '../model';

export const UsernameField: React.FC = () => {
  const { value, name, onChange } = useField(form.fields.username);

  return (
    <InputField
      className="form-control-lg"
      name={name}
      placeholder="Username"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
