/* eslint-disable react/button-has-type */
import React from 'react';

export const Button = ({ type = 'button', childlren, chassName, onClick }) => (
  <button type={type} className={chassName} onClick={onClick}>
    {childlren}
  </button>
);
