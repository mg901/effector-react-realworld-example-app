import React from 'react';
import './index.css';

type Props = Readonly<{
  errors: Record<string, readonly string[]>;
}>;

export const ErrorList: React.FC<Props> = ({ errors = {} }) => {
  const errorList = Object.keys(errors);

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
