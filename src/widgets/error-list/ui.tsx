import { selectors } from './model';

export const ErrorList: React.FC = () => {
  const hasErrors = selectors.useHasErrors();
  const errorList = selectors.useErrorList();

  return (
    <>
      {hasErrors && (
        <ul className="error-messages">
          {errorList.map(([key, val]) => (
            <li key={key}>
              {key} {val}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
