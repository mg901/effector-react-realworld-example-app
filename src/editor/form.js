import React from 'react';
import { useStore } from 'effector-react';
import { InputFiled } from '../components/input-field';
import { TextField } from '../components/text-field';
import { Button } from '../components/button';
import { TagList } from './tag-list';
import { $editor, onChangeText, addTag } from './editor.model';
import { $isLoading, createArticle } from './editable-article.model';

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
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTag(e.currentTarget.value);
            }
          }}
        />
        <TagList />

        <Button
          className="btn-lg pull-xs-right btn-primary"
          disabled={isLoading}
          onClick={() => {
            createArticle(editor);
          }}>
          Publish Article
        </Button>
      </fieldset>
    </form>
  );
};
