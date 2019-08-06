import React from 'react';
import { useStore } from 'effector-react';
import * as agent from '../api';
import { $tags, getAsyncTags } from './store';

const Tag = ({ tag, onClick }) => {
  return (
    <button
      type="button"
      className="tag-default tag-pill"
      key={tag}
      onClick={onClick}>
      {tag}
    </button>
  );
};

const handleClick = (handler, tag) => (e) => {
  e.preventDefault();
  handler(
    tag,
    (page) => agent.articles.byTag(tag, page),
    agent.articles.byTag(tag),
  );
};

export const Tags = ({ onClickTag }) => {
  const tags = useStore($tags);
  const isLoading = useStore(getAsyncTags.pending);

  return (
    <>
      {isLoading && <div>Loading Tags...</div>}
      <div className="tag-list">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} onClick={handleClick(onClickTag, tag)} />
        ))}
      </div>
    </>
  );
};
