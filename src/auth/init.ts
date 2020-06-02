import { $token, $authorizedUser } from './model';

$token.catch(console.error).on($authorizedUser, (_, user) => user.token);
