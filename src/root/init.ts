import { guard, combine } from 'effector';
import { $$isAuthenticated } from '../auth';
import { $location, history } from '../router';

guard({
  source: combine({ location: $location, isAuth: $$isAuthenticated }),
  filter: ({ location, isAuth }) => location.pathname === '/' && isAuth,
}).watch(() => {
  history.push('your-feed');
});
