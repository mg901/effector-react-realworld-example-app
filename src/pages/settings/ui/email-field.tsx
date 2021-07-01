import { useField } from 'effector-forms';
import { InputField } from 'shared/ui';
import { model } from '../model';

export const EmailField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.email);

  return (
    <InputField
      className="form-control-lg"
      name={name}
      placeholder="Email"
      type="email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
