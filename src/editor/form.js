import React from 'react';
import { InputFiled } from '../components/input-field';
import { TextField } from '../components/text-field';
import { Button } from '../components/button';

export const Form = () => {
  return (
    <form>
      <fieldset>
        <InputFiled placeholder="Article Title" />

        <InputFiled placeholder="What's this article about?" />

        <TextField placeholder="Write your article (in markdown)" />

        <InputFiled placeholder="Enter tags" />

        <Button className="btn-lg pull-xs-right btn-primary">
          Publish Article
        </Button>
      </fieldset>
    </form>
  );
};
