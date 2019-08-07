import React from 'react';
import { useStore } from 'effector-react';
import { InputFiled } from '../components/input-field';
import { TextField } from '../components/text-field';
import { Button } from '../components/button';
import { TagList } from './tag-list';
import {
  $editor,
  $isLoading,
  onChangeText,
  onAddTag,
  asyncCreatePost,
} from './model';

export const Form = () => {
  const isLoading = useStore($isLoading);
  const editor = useStore($editor);

  return (
    <form>
      <fieldset>
        <InputFiled
          value={editor.title}
          placeholder="Article Title"
          onChange={onChangeText('title')}
        />

        <InputFiled
          value={editor.description}
          placeholder="What's this article about?"
          onChange={onChangeText('description')}
        />

        <TextField
          value={editor.body}
          placeholder="Write your article (in markdown)"
          onChange={onChangeText('body')}
        />

        <InputFiled
          value={editor.tagInput}
          placeholder="Enter tags"
          onChange={onChangeText('tagInput')}
          onKeyDown={onAddTag}
        />
        <TagList />

        <Button
          className="btn-lg pull-xs-right btn-primary"
          disabled={isLoading}
          onClick={() => {
            asyncCreatePost(editor);
          }}>
          Publish Article
        </Button>
      </fieldset>
    </form>
  );
};
