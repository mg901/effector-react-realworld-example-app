import { useStore } from 'effector-react';
import { $hasErrors, $errorsList } from './model';

export const ErrorList: React.FC = () => {
  const hasErrors = useStore($hasErrors);
  const errorList = useStore($errorsList);

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
