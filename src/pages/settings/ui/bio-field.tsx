import { useField } from 'effector-forms';
import { FormField } from 'shared/ui';
import { model } from '../model';

export const BioField: React.FC = () => {
  const { value, name, onChange } = useField(model.form.fields.bio);

  return (
    <FormField
      as="textarea"
      className="form-control-lg"
      name={name}
      placeholder="Short bio about you"
      rows={8}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
