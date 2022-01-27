import { Container } from '../container';
import styles from './index.module.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const Page = ({ children }: Props) => (
  <Container className={styles.page}>{children}</Container>
);
