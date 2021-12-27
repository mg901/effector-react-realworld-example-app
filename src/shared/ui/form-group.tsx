type Props = Readonly<{
  children: React.ReactNode;
}>;

export const FormGroup = ({ children }: Props) => (
  <div className="form-group">{children}</div>
);
