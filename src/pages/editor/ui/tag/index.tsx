import { Button, ButtonProps } from 'ui';
import './index.css';

export const Tag: React.FC<ButtonProps> = ({ children, onClick }) => (
  <span className="tag-default tag-pill">
    {children}
    <Button className="btn-sm editor-tag" onClick={onClick}>
      <i className="ion-close-round" />
    </Button>
  </span>
);
