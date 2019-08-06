import React from 'react';
import * as api from '../../api';

const DeleteButton = ({ slug, commentId, onClick, show }) => {
  const del = () => {
    const payload = api.comments.delete(slug, commentId);
    onClick(payload, commentId);
  };

  if (show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del} />
      </span>
    );
  }

  return null;
};
