import { useField } from 'effector-forms';
import { InputField } from 'shared/ui';
import { model } from '../model';

export const PasswordField: React.FC = () => {
  const { name, onChange } = useField(model.form.fields.password);

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
