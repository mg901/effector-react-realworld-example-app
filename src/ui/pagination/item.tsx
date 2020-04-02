import React from 'react';

type ItemProps = Readonly<{
  children: React.ReactNode;
  dataActive?: boolean;
  onClick: () => void;
}>;

export const Item: React.FC<ItemProps> = ({
  children,
  dataActive,
  onClick,
}) => (
  <li className="pagination__item">
    <button
      type="button"
      data-active={dataActive}
      className="pagination__btn"
      onClick={onClick}>
      {children}
    </button>
  </li>
);
