import { Button } from '@/shared/ui';
import './index.css';

type Props = Readonly<{
  tag: string;
  onTagClick: (x: string) => void;
  children: React.ReactNode;
}>;

export const Tag = ({ tag, onTagClick, children }: Props) => {
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
