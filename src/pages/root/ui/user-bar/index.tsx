import React, { useState, useRef } from 'react';
import useClickOutside from 'use-onclickoutside';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../../../../ui';
import { Paths } from '../../../../core/router';
import { UserPick } from '../user-pick';
import { DownDownMenu } from '../dropdown-menu';
import * as css from './index.css';

type Props = Readonly<{
  image: string;
  username: string;
  onLogOutClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
}>;

export const UserBar: React.FC<Props> = ({
  image,
  username,
  onLogOutClick,
}) => {
  const [state, setState] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setState(false));

  const handleClick = (): void => setState(false);

  return (
    <>
      <UserPick
        image={image}
        username={username}
        onClick={(): void => setState(true)}
      />
      <DownDownMenu ref={ref} show={state}>
        <li>
          <Link
            as={RouterLink}
            to={`/@${username}`}
            className={css.link}
            onClick={handleClick}>
            Signed in as <span className={css.textStong}>{username}</span>
          </Link>
        </li>
        <li>
          <Link
            as={RouterLink}
            to={Paths.SETTINGS}
            className={css.link}
            onClick={handleClick}>
            Settings
          </Link>
        </li>
        <li>
          <Link
            as={RouterLink}
            to={Paths.ROOT}
            className={css.link}
            onClick={onLogOutClick}>
            logout
          </Link>
        </li>
      </DownDownMenu>
    </>
  );
};
