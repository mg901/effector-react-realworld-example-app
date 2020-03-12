import React from 'react';
import { Button } from '../button';
import './index.css';

type Props = Readonly<{
  image: string;
  username: string;
  onClick: () => void;
}>;

export const UserPick: React.FC<Props> = ({ image, username, onClick }) => (
  <Button className="user-pick-wrap" onClick={onClick}>
    <img src={image} className="user-pick" alt={username} />
  </Button>
);
