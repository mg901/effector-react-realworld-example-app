import { Page, Row } from 'ui';
import { Sidebar } from './modules/sidebar';
import { Banner } from './ui/banner';
import { Routes } from './ui/routes';
import { Tabs } from './ui/tabs';

export const HomePage: React.FC = () => (
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
