import { useField } from 'effector-forms';
import { InputField } from 'shared/ui';
import { model } from '../model';

export const TitleField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.title);

  return (
    <InputField
      className="form-control-lg"
      name={name}
      placeholder="Article Title"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
