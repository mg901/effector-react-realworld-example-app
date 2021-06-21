import { useField } from 'effector-forms';
import { TextField } from 'shared/ui';
import * as settings from '../model';

export const BioField: React.FC = () => {
  const { value, name, onChange } = useField(settings.model.form.fields.bio);

  return (
    <TextField
      className="form-control-lg"
      name={name}
      placeholder="Short bio about you"
      rows={8}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
