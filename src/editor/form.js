import React from 'react';
import { useStore } from 'effector-react';
import { Input, Textarea } from './form-fields';
import { Button } from '../components/button';
import { TagList } from './tag-list';
import { addTag, isLoading, createArticle } from './model';

export const Form = () => {
  const loading = useStore(isLoading);

  return (
    <form>
      <fieldset>
        <Input name="title" placeholder="Article Title" />

        <Input name="description" placeholder="What's this article about?" />

        <Textarea name="body" placeholder="Write your article (in markdown)" />

        <Input
          name="tagInput"
          placeholder="Enter tags"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTag(e.currentTarget.value);
            }
          }}
        />
        <TagList />

        <Button
          disabled={loading}
          onClick={() => {
            createArticle();
          }}>
          Publish Article
        </Button>
      </fieldset>
    </form>
  );
};
