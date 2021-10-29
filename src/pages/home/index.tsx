import { Suspense } from 'react';
import { Page, Row, Spinner } from 'shared/ui';
import { Routes } from './routes';
import { LogoutBanner } from './ui/logout-banner';
import { Sidebar } from './ui/sidebar';
import { Tabs } from './ui/tabs';

export const HomePage: React.FC = () => (
  <div className="home-page">
    <LogoutBanner />
    <Page>
      <Row>
        <main className="col-md-9">
          <Tabs />
          <Suspense fallback={<Spinner loading />}>
            <Routes />
          </Suspense>
        </main>

        <div className="col-md-3">
          <Sidebar />
        </div>
      </Row>
    </Page>
  </div>
);

export default HomePage;
