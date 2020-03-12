import React from 'react';
import './index.css';

type ErrorList = Readonly<{
  [key: string]: readonly string[];
}>;

type Props = Readonly<{
  errors?: ErrorList;
}>;

export const ErrorList: React.FC<Props> = ({ errors = {} }) => {
  const listErrors = Object.keys(errors);

  return listErrors.length ? (
    <ul className="error-messages">
      {listErrors.map((key) => (
        <li key={key}>
          {key} {errors[key]}
        </li>
      ))}
    </ul>
  ) : null;
};
