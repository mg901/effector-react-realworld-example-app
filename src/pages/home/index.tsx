import { memo } from 'react';
import { RoutesWrapper } from 'shared/library/router';
import { Page, Row } from 'shared/ui';
import { Routes } from './routes';
import { LogoutBanner } from './ui/logout-banner';
import { Aside } from './ui/sidebar';
import { Tabs } from './ui/tabs';
import { TagList } from './ui/tag-list';

const Main = memo(() => {
  return (
    <main className="col-md-9">
      <Tabs />
      <RoutesWrapper>
        <Routes />
      </RoutesWrapper>
    </main>
  );
});

const Sidebar = memo(() => {
  return (
    <div className="col-md-3">
      <Aside>
        <TagList />
      </Aside>
    </div>
  );
});

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <LogoutBanner />
      <Page>
        <Row>
          <Main />
          <Sidebar />
        </Row>
      </Page>
    </div>
  );
};

export default HomePage;
