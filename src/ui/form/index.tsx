import './index.css';

type Props = Readonly<React.FormHTMLAttributes<HTMLFormElement>>;

export const Form: React.FC<Props> = ({
  className = '',
  children,
  ...props
}) => (
  <form {...props} className={`my-form ${className}`}>
    <fieldset>{children}</fieldset>
  </form>
);
