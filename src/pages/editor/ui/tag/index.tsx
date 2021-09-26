import { Button, ButtonProps } from 'shared/ui';
import './index.css';

export const Tag: React.FC<ButtonProps> = ({ children, onClick }) => (
  <span className="tag-default tag-pill">
    {children}
    <Button className="editor-tag" size="sm" onClick={onClick}>
      <i className="ion-close-round" />
    </Button>
  </span>
);
