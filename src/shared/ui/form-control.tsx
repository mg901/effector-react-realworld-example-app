interface Props<C extends React.ElementType> {
  as?: C;
}

type FormControlProps<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

export const FormControl = <C extends React.ElementType = 'input'>({
  as,
  className,
  ...props
}: FormControlProps<C>): JSX.Element => {
  const Component = as ?? 'input';

  return <Component {...props} className={`form-control ${className}`} />;
};
