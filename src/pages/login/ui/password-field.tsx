import { useField } from 'effector-forms';
import { InputField } from 'ui';
import { form } from '../model';

export const PasswordField: React.FC = () => {
  const { name, onChange } = useField(form.fields.password);

  return (
    <InputField
      autoComplete="current-password"
      className="form-control-lg"
      name={name}
      placeholder="Password"
      type="password"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
