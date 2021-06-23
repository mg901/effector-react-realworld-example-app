import { Link } from 'react-router-dom';
import * as router from 'shared/library/router';

type Props = Readonly<{
  title: string;
}>;

export const Logo: React.FC<Props> = ({ title }) => (
  <Link className="navbar-brand" to={router.URLS.ROOT}>
    {title.toLowerCase()}
  </Link>
);
