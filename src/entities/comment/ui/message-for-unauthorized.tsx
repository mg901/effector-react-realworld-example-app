import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/router';

type Props = Readonly<{
  isAuth: boolean;
}>;

export const MessageForUnauthorized = ({ isAuth }: Props) => {
  return isAuth ? null : (
    <p>
      <Link to={ROUTES.login}>Sign in</Link>
      &nbsp;or&nbsp;
      <Link to={ROUTES.registration}>sign up</Link>
      &nbsp;to add comments on this article.
    </p>
  );
};
