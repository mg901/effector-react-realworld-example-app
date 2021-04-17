import { Page, Row } from 'ui';
import { Routes } from './routes';
import { Sidebar } from './sidebar';
import { Banner } from './ui/banner';
import { Tabs } from './ui/tabs';

export const Home: React.FC = () => (
  <div className="home-page">
    <Banner />
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
