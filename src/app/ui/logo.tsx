import { Link, URLS } from 'shared/library/router';

type Props = Readonly<{
  title: string;
}>;

export const Logo: React.FC<Props> = ({ title }) => (
  <Link className="navbar-brand" to={URLS.ROOT}>
    {title.toLowerCase()}
  </Link>
);
