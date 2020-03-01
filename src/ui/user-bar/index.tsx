import React, { useState, useRef } from 'react';
import { Event } from 'effector';
import useClickOutside from 'use-onclickoutside';
import { UserPick } from '../user-pick';
import { DownDownMenu } from '../dropdown-menu';

type Props = {
  image: string;
  username: string;
  onLogOutClick: Event<void>;
};

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
      <UserPick
        image={image}
        username={username}
        onClick={(): void => setState(true)}
      />
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
