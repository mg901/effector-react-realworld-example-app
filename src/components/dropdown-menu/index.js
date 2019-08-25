import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import cx from 'clsx';
import './index.css';

export const DownDownMenu = forwardRef(
  ({ shown, username, onClick, onLogOutClick }, ref) => (
    <ul
      ref={ref}
      className={cx('dropdown-menu', { 'dropdown-menu-active': shown })}>
      <li className="dropdown-menu-item">
        <Link to={`/@${username}`} className="link" onClick={onClick}>
          Signed in as <span className="username">{username}</span>
        </Link>
      </li>
      <li className="dropdown-menu-item">
        <Link to="/settings" className="link" onClick={onClick}>
          Settings
        </Link>
      </li>
      <li className="dropdown-menu-item">
        <Link to="/" className="link" onClick={onLogOutClick}>
          logout
        </Link>
      </li>
    </ul>
  ),
);

DownDownMenu.displayName = 'DownDownMenu';
