import * as model from './model';

type Props = Readonly<{
  className?: string;
}>;

export const Avatar = ({ className }: Props) => {
  const username = model.selectors.useUsername();
  const image = model.selectors.useImage();

  return <img alt={username} className={className || undefined} src={image} />;
};
