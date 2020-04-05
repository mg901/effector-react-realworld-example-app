import React from 'react';
import { useList } from 'effector-react';
import { $articles } from './model';
import { Post } from '../../ui';
import { Pagination } from './pagination';

export const GlobalFeed: React.FC = () => (
  <div className="feed">
    <ul className="feed-list">
      {useList($articles, ({ author, title, description, tagList }) => (
        <Post
          title={title}
          author={author}
          description={description}
          tags={tagList}
        />
      ))}
    </ul>
    <Pagination />
  </div>
);
