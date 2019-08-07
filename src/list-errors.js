import React from 'react';
import { useStore } from 'effector-react';
import { $errors } from './models/app';

export const ListErrors = () => {
  const errors = useStore($errors);
  const listErrors = Object.keys(errors);

  return (
    listErrors.length > 0 && (
      <ul className="error-messages">
        {listErrors.map((key) => (
          <li key={key}>
            {key} {errors[key]}
          </li>
        ))}
      </ul>
    )
  );
};
