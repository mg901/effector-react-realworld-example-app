import React from 'react';
import { useStore } from 'effector-react';
import { InputFiled } from '../components/input-field';
import { TextField } from '../components/text-field';
import { Button } from '../components/button';
import { onChangeText, $editor } from './model';

export const Form = () => {
  const { title, description, body, tagInput } = useStore($editor);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <fieldset>
        <InputFiled
          value={title}
          placeholder="Article Title"
          onChange={onChangeText('title')}
        />

        <InputFiled
          value={description}
          placeholder="What's this article about?"
          onChange={onChangeText('description')}
        />

        <TextField
          value={body}
          placeholder="Write your article (in markdown)"
          onChange={onChangeText('body')}
        />

        <InputFiled
          value={tagInput}
          placeholder="Enter tags"
          onChange={onChangeText('tagInput')}
        />

        <Button className="btn-lg pull-xs-right btn-primary">
          Publish Article
        </Button>
      </fieldset>
    </form>
  );
};
