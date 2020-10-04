import React from 'react';
import { Form as UIForm } from 'ui';
import { BodyField } from './body-field';
import { DescriptionField } from './description-field';
import { TitleField } from './title-field';
import '../model/init';

export const Form: React.FC = () => (
  <UIForm id="editor" onSubmit={(e) => e.preventDefault()}>
    <TitleField />
    <DescriptionField />
    <BodyField />
  </UIForm>
);
