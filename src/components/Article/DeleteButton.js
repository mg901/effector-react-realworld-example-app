import React from 'react';
import { connect } from 'react-redux';
import * as agent from '../../agent';
import { DELETE_COMMENT } from '../../constants/actionTypes';

const mapDispatchToProps = (dispatch) => ({
  onClick: (payload, commentId) =>
    dispatch({ type: DELETE_COMMENT, payload, commentId }),
});

const DeleteButton = ({ slug, commentId, onClick, show }) => {
  const del = () => {
    const payload = agent.comments.delete(slug, commentId);
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

export default connect(
  () => ({}),
  mapDispatchToProps,
)(DeleteButton);
