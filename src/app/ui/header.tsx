import { Container } from '@/shared/ui';

type Props = Readonly<{
  className?: string;
  children: React.ReactNode;
}>;

export const Header = ({ className = '', children }: Props) => {
  return (
    <header className={`navbar navbar-light ${className}`}>
      <Container>{children}</Container>
    </header>
  );
};
