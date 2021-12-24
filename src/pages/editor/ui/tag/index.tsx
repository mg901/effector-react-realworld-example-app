import { Button } from 'shared/ui';
import './index.css';

type Props = Readonly<{
  tag: string;
  onTagClick: (x: string) => void;
}>;

export const Tag: React.FC<Props> = ({ tag, onTagClick, children }) => {
  const handleClick = () => onTagClick(tag);

  return (
    <span className="tag-default tag-pill">
      {children}
      <Button className="editor-tag" size="sm" onClick={handleClick}>
        <i className="ion-close-round" />
      </Button>
    </span>
  );
};
