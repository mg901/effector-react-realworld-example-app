import { selectors } from './model';

type Props = Readonly<{
  className?: string;
}>;

export const Avatar = ({ className }: Props) => {
  const { username, image } = selectors.useSession();

  return <img alt={username} className={className} src={image} />;
};
