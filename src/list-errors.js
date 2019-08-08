import React from 'react';

export const ListErrors = ({ errors }) => {
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
