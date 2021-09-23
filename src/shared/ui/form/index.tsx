import './index.css';
import { FormControl } from '../form-control';
import { FormGroup } from '../form-group';

type Props = Readonly<React.FormHTMLAttributes<HTMLFormElement>>;

const FormComponent: React.FC<Props> = ({
  className = '',
  children,
  ...props
}) => (
  <form {...props} className={`my-form ${className}`}>
    <fieldset>{children}</fieldset>
  </form>
);

export const Form = Object.assign(FormComponent, {
  Group: FormGroup,
  Control: FormControl,
});
