import { forwardRef } from 'react';
import { FormControl } from '../form-control';
import { FormGroup } from '../form-group';
import styles from './index.module.css';

export type FormComponentProps = Readonly<
  React.FormHTMLAttributes<HTMLFormElement>
>;

const FormComponent = forwardRef<HTMLFormElement, FormComponentProps>(
  ({ children, className = '', ...props }, ref) => (
    <form ref={ref} {...props} className={`${styles.form} ${className}`}>
      <fieldset>{children}</fieldset>
    </form>
  ),
);

export const Form = Object.assign(FormComponent, {
  Group: FormGroup,
  Control: FormControl,
});
