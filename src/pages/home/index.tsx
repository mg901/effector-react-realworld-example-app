import { Page, Row } from 'shared/ui';
import { Routes } from './routes';
import { Sidebar } from './sidebar';
import { LogoutBanner, Tabs } from './ui';

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
