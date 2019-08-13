import React, { useState, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { UserPick } from '../components/user-pick';
import { DownDownMenu } from '../components/dropdown-menu';
import { logOut } from '../auth/model.events';

import './index.css';

export const UserBar = ({ image, username }) => {
  const [state, setState] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setState(false));
  const onCloseMenu = () => setState(false);

  return (
    <>
      <UserPick
        image={image}
        username={username}
        onClick={(e) => {
          e.preventDefault();
          setState(true);
        }}
      />
      <DownDownMenu
        ref={ref}
        username={username}
        shown={state}
        onClick={onCloseMenu}
        onLogOutClick={() => logOut()}
      />
    </>
  );
};
