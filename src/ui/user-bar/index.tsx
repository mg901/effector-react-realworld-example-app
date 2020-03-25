import React, { useState, useRef } from 'react';
import { Event } from 'effector';
import useClickOutside from 'use-onclickoutside';
import { Button } from '../button';
import { DownDownMenu } from '../dropdown-menu';
import './index.css';

type Props = Readonly<{
  image: string;
  username: string;
  onLogOutClick: Event<void>;
}>;

export const UserBar: React.FC<Props> = ({
  image,
  username,
  onLogOutClick,
}) => {
  const [state, setState] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setState(false));

  return (
    <>
      <Button
        className="user-pick-wrap"
        onClick={(): void => {
          setState(true);
        }}>
        <img src={image} className="user-pick" alt={username} />
      </Button>
      <DownDownMenu
        ref={ref}
        username={username}
        shown={state}
        onClick={(): void => setState(false)}
        onLogOutClick={onLogOutClick}
      />
    </>
  );
};
