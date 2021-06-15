export type Props = Readonly<{
  errors: Readonly<{
    errors: Readonly<Record<string, string>>;
  }>;
}>;

export const ErrorList: React.FC<Props> = ({ errors }) => {
  const errorList = Object.keys(Object(errors));

  return (
    <>
      {errorList.length > 0 && (
        <ul className="error-messages">
          {Object.entries(errors.errors).map(([key, val]) => (
            <li key={key}>
              {key} {val}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
