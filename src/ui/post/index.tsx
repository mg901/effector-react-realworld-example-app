import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

type Author = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

type Props = {
  author: Author;
  title: string;
  description: string;
  tags: readonly string[];
};

export const Post: React.FC<Props> = ({
  author: { username, image },
  title,
  description,
  tags,
}) => (
  <section className="post">
    <div className="post__header">
      {/* <img src={image} alt={username} /> */}
    </div>
    <div className="post__body">
      <h1 className="h2">{title}</h1>
      <p>description</p>
      <Link to="/" className="description">
        {description}
      </Link>
    </div>
    <div className="post__footer">
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="button-wrap">
        <button type="button">like me</button>
      </div>
    </div>
  </section>
);
