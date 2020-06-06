import React, { useState, useRef } from 'react';
import useClickOutside from 'use-onclickoutside';
import { UserPick } from '../user-pick';
import { DownDownMenu } from '../dropdown-menu';

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
        show={state}
        onLinkClick={(): void => setState(false)}
        onLogOutClick={onLogOutClick}
      />
    </>
  );
};
