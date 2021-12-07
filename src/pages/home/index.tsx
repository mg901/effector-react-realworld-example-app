// import { RoutesWrapper } from 'shared/library/router';
import { Page, Row } from 'shared/ui';
// import { Routes } from './routes';
import { LogoutBanner } from './ui/logout-banner';
import { Aside } from './ui/sidebar';
// import { Tabs } from './ui/tabs';
import { TagList } from './ui/tag-list';

// const Main = () => {
//   return (
//     <main className="col-md-9">
//       <Tabs />
//       <RoutesWrapper>
//         <Routes />
//       </RoutesWrapper>
//     </main>
//   );
// };

const Sidebar = () => {
  return (
    <div className="col-md-3">
      <Aside>
        <TagList />
      </Aside>
    </div>
  );
};

const Home: React.FC = ({ children }) => {
  return (
    <div className="home-page">
      <LogoutBanner />
      <Page>
        <Row>
          {children}
          <Sidebar />
        </Row>
      </Page>
    </div>
  );
};

const HomePage: React.FC = () => {
  return <Home>{/* <Main /> */}</Home>;
};

export default HomePage;
