import { memo } from 'react';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const NavItem = memo(({ children }: Props) => {
  return <li className="nav-item">{children}</li>;
});

NavItem.displayName = 'NavItem';
