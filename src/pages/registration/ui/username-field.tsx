import { useField } from 'effector-forms';
import { InputField } from 'shared/ui';
import { model } from '../model';

export const UsernameField: React.FC = () => {
  const { name, onChange } = useField(model.form.fields.username);

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
