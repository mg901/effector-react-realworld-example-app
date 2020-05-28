import React from 'react';
import './index.css';

type Props = Readonly<{
  errors: Record<string, readonly string[]>;
}>;

export const ErrorList: React.FC<Props> = ({ errors = {} }) => {
  const listErrors = Object.keys(errors);

  return (
    <>
      {listErrors.length > 0 && (
        <ul className="error-messages">
          {listErrors.map((key) => (
            <li key={key}>
              {key} {errors[key]}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
