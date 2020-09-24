import React from 'react';
import { ButtonProps } from 'ui';
import './index.css';

type Props = Readonly<{
  text: string;
  onClick: ButtonProps['onClick'];
}>;

export const Tag: React.FC<Props> = ({ text, onClick }) => (
  <span className="tag-default tag-pill">
    {text.toLowerCase()}
    <button type="button" className="btn btn-sm editor-tag" onClick={onClick}>
      <i className="ion-close-round" />
    </button>
  </span>
);
