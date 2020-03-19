import React from 'react';
import { Button } from '../../../ui';

type Props = {
  text: string;
  onClick: () => void;
};

export const Tag: React.FC<Props> = ({ text, onClick }) => (
  <span className="tag">
    <span className="text">{text}</span>
    <Button type="button" onClick={onClick}>
      x
    </Button>
  </span>
);
