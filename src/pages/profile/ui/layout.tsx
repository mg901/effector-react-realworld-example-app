import { Container, Row } from '@/shared/ui';
import { ProfileInfo } from './profile-info';
import { Tabs } from './tabs';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Layout = ({ children }: Props) => {
  return (
    <div className="profile-page">
      <ProfileInfo />
      <Container>
        <Row>
          <div className="col-xs-12 col-md-10 offset-md-1">
            <Tabs />
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};
