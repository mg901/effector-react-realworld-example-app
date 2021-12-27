import './index.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const ArticlesWrapper = ({ children }: Props) => {
  return <ul className="articles-wrapper list-unstyled">{children}</ul>;
};
