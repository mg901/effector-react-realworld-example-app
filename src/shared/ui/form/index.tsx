import { forwardRef } from 'react';
import { FormControl } from '../form-control';
import { FormGroup } from '../form-group';
import './index.css';

export type FormComponentProps = Readonly<
  React.FormHTMLAttributes<HTMLFormElement>
>;

const FormComponent = forwardRef<HTMLFormElement, FormComponentProps>(
  ({ className = '', children, ...props }, ref) => (
    <form ref={ref} {...props} className={`my-form ${className}`}>
      <fieldset>{children}</fieldset>
    </form>
  ),
);

export const Form = Object.assign(FormComponent, {
  Group: FormGroup,
  Control: FormControl,
});
