import React, { useState, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { UserPick } from '../user-pick';
import { DownDownMenu } from '../dropdown-menu';
import { logOut } from '../../auth/model';

import { Button } from '../button';
import './index.css';

// export const DownDownMenu = ({
//   ref,
//   shown,
//   username,
//   onClick,
//   onLogOutClick,
// }) => (
//   <ul
//     ref={ref}
//     className={cx('dropdown-menu', { 'dropdown-menu-active': shown })}>
//     <li className="dropdown-menu-item">
//       <Link to={`/@${username}`} className="link" onClick={onClick}>
//         Signed in as <span className="username">{username}</span>
//       </Link>
//     </li>
//     <li className="dropdown-menu-item">
//       <Link to="/settings" className="link" onClick={onClick}>
//         Settings
//       </Link>
//     </li>
//     <li className="dropdown-menu-item">
//       <Button className="link" onClick={onLogOutClick}>
//         logout
//       </Button>
//     </li>
//   </ul>
// );

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
        shown={state}
        onClick={onCloseMenu}
        onLogOutClick={() => logOut()}
      />
    </>
  );
};
