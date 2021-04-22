import { Link } from 'react-router-dom';
import { AuthCosumer } from 'router';

export const LogoutMessage: React.FC = () => {
  return (
    <AuthCosumer>
      {({ isAuth }) =>
        isAuth ? null : (
          <p>
            <Link to="/login">Sign in</Link>
            &nbsp;or&nbsp;
            <Link to="/register">sign up</Link>
            &nbsp;to add comments on this article.
          </p>
        )
      }
    </AuthCosumer>
  );
};
