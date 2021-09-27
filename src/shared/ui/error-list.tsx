type Props = {
  error: Record<string, unknown>;
};

export const ErrorList: React.FC<Props> = ({ error }) => {
  const hasErrors = checkHasErrors(error);
  const errors = getErrors(error);

  return (
    <>
      {hasErrors && (
        <ul className="error-messages">
          {errors.map(([key, val]) => (
            <li key={key}>
              {key} {val}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

function checkHasErrors(x: Props['error']) {
  return Object.keys(Object(x)).length > 0;
}
function getErrors(x: Props['error']) {
  return Object.entries(Object(x?.errors));
}
