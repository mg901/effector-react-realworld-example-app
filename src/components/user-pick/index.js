import React from 'react';
import { Button } from '..';
import './index.css';

export const UserPick = ({ image, username, onClick }) => (
  <Button className="user-pick-wrap" onClick={onClick}>
    <img src={image} className="user-pick" alt={username} />
  </Button>
);
