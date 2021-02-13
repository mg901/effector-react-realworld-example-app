import { FormGroup } from './form-group';
import { Input, InputProps } from './input';

export const InputField: React.FC<InputProps> = (props) => (
  <FormGroup>
    <Input {...props} />
  </FormGroup>
);
