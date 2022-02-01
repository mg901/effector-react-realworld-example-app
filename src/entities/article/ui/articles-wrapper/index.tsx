import styles from './index.module.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const ArticlesWrapper = ({ children }: Props) => {
  return <ul className={`${styles.wrapper} list-unstyled`}>{children}</ul>;
};
