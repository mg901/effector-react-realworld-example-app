import React from 'react';
import './index.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = ({ children, className }) => (
  <div className={`container ${className}`}>{children}</div>
);
