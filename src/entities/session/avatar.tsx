import * as model from './model';

type Props = Readonly<{
  className?: string;
}>;

export const Avatar = ({ className }: Props) => {
  const { username, image } = model.selectors.useVisitor();

  return <img alt={username} className={className} src={image} />;
};
