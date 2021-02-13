import React from 'react';
import { Button } from 'ui';
import './index.css';

type Props = Readonly<{
  onClick: () => void;
}>;

export const ButtonDelete: React.FC<Props> = ({ onClick }) => (
  <Button className="mod-options btn-delete" onClick={onClick}>
    <i className="ion-trash-a" />
  </Button>
);
