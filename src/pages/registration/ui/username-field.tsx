import { useField } from 'effector-forms';
import { InputField } from 'ui';
import { form } from '../model';

export const UsernameField: React.FC = () => {
  const { name, onChange } = useField(form.fields.username);

  return (
    <InputField
      className="form-control-lg"
      name={name}
      placeholder="Username"
      type="text"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
