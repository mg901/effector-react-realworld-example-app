import { Container } from 'shared/ui';

type Props = Readonly<{
  className?: string;
}>;

export const Header: React.FC<Props> = ({ className = '', children }) => (
  <header className={`navbar navbar-light ${className}`}>
    <Container>{children}</Container>
  </header>
);
