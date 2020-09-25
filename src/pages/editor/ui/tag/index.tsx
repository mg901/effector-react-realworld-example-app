import React from 'react';
import { ButtonProps } from 'ui';
import './index.css';

type Props = Readonly<{
  onClick: ButtonProps['onClick'];
}>;

export const Tag: React.FC<Props> = ({ children, onClick }) => (
  <span className="tag-default tag-pill">
    {children}
    <button type="button" className="btn btn-sm editor-tag" onClick={onClick}>
      <i className="ion-close-round" />
    </button>
  </span>
);
