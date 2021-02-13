import { FormGroup } from './form-group';
import { Textarea, TextareaProps } from './textarea';

export const TextField: React.FC<TextareaProps> = (props) => (
  <FormGroup>
    <Textarea {...props} />
  </FormGroup>
);
