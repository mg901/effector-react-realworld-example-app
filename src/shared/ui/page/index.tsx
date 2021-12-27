import { Container } from '../container';
import './index.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Page = ({ children }: Props) => (
  <Container className="page">{children}</Container>
);

Page.displayName = 'Page';
