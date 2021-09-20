import { FormControl } from './form-control';
import { FormGroup } from './form-group';

interface Props<C extends React.ElementType> {
  as?: C;
}

type FormFieldProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

export const FormField = <C extends React.ElementType = 'input'>(
  props: FormFieldProps<C>,
): JSX.Element => {
  return (
    <FormGroup>
      <FormControl {...props} />
    </FormGroup>
  );
};
