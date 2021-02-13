export type TextareaProps = Readonly<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>;

export const Textarea: React.FC<TextareaProps> = ({
  className = '',
  ...props
}) => <textarea className={`form-control ${className}`} {...props} />;
