import React from 'react';
import { Button } from '../../../../ui/button';
import * as css from './index.css';

type Props = Readonly<{
  image: string;
  username: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}>;

export const UserPick: React.FC<Props> = ({ image, username, onClick }) => (
  <Button className={css.userPickWrap} onClick={onClick}>
    <img src={image} className={css.userPickWrap} alt={username} />
  </Button>
);
