import './index.css';

export const ArticlesWrapper: React.FC = ({ children }) => {
  return <ul className="articles-wrapper list-unstyled">{children}</ul>;
};
