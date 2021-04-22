import { Page, Row } from 'ui';
import { Routes } from './routes';
import { Sidebar } from './sidebar';
import { LogoutBanner } from './ui/logout-banner';
import { Tabs } from './ui/tabs';

export const Home: React.FC = () => (
  <div className="home-page">
    <LogoutBanner />
    <Page>
      <Row>
        <main className="col-md-9">
          <Tabs />
          <Routes />
        </main>

        <div className="col-md-3">
          <Sidebar />
        </div>
      </Row>
    </Page>
  </div>
);

export default Home;
