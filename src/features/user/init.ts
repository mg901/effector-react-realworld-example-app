import { model } from 'library/router';
import { $authorizedUser, loggedOutClicked, $token } from './model';

$authorizedUser.reset(loggedOutClicked);
$token.catch(console.error).on($authorizedUser, (_, { token }) => token);

loggedOutClicked.watch(() => {
  model.history.push('/');
});
