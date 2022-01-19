import { Page, Row } from '@/shared/ui';
import { LogoutBanner } from './logout-banner';
import { Sidebar } from './sidebar';
import { Tabs } from './tabs';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Layout = ({ children }: Props) => {
  return (
    <div className="home-page">
      <LogoutBanner />
      <Page>
        <Row>
          <main className="col-md-9">
            <Tabs />
            {children}
          </main>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </Row>
      </Page>
    </div>
  );
};
