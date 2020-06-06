import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../../../../ui';
import './index.css';

type Props = Readonly<{
  show: boolean;
  username: string;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onLogOutClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}>;

export const DownDownMenu = forwardRef<HTMLUListElement, Props>(
  ({ show, username, onLinkClick: onClick, onLogOutClick }, ref) => (
    <ul ref={ref} className="dropdown-menu" data-active={show}>
      <li className="dropdown-menu-item">
        <Link as={RouterLink} to={`/@${username}`} onClick={onClick}>
          Signed in as <span className="username">{username}</span>
        </Link>
      </li>
      <li className="dropdown-menu-item">
        <Link as={RouterLink} to="/settings" onClick={onClick}>
          Settings
        </Link>
      </li>
      <li className="dropdown-menu-item">
        <Link as={RouterLink} to="/" onClick={onLogOutClick}>
          logout
        </Link>
      </li>
    </ul>
  ),
);

DownDownMenu.displayName = 'DownDownMenu';
