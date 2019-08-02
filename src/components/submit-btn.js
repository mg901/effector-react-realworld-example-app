import React from 'react';

export const SubmitBtn = ({ disabled, children }) => (
  <button
    className="btn btn-lg btn-primary pull-xs-right"
    type="submit"
    disabled={disabled}>
    {children}
  </button>
);
