import { APP_NAME } from '@/shared/config';

import { Header } from './header';
import { Logo } from './logo';
import { Navigation } from './navigation';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header>
        <Logo title={APP_NAME} />
        <ul className="nav navbar-nav pull-xs-right">
          <Navigation />
        </ul>
      </Header>

      {children}
    </>
  );
};
