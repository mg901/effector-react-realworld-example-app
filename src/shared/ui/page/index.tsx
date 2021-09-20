import { Container } from '../container';
import './index.css';

export const Page: React.FC = ({ children }) => (
  <Container className="page">{children}</Container>
);
