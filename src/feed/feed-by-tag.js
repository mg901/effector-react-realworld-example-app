import React from 'react';
import { useList } from 'effector-react';
import { $feedByTag } from './model';

export const FeedByTag = () => (
  <ul>
    {useList($feedByTag, ({ title, slug }) => (
      <li key={slug}>{title}</li>
    ))}
  </ul>
);
