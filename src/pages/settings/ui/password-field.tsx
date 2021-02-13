import { useField } from 'effector-forms';
import { InputField } from 'ui';
import { form } from '../model';

export const PasswordField: React.FC = () => {
  const { value, name, onChange } = useField(form.fields.password);

  return (
    <InputField
      autoComplete="current-password"
      className="form-control-lg"
      name={name}
      placeholder="New Password"
      type="password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
