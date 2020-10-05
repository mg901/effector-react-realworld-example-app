import React from 'react';
import { useGate } from 'effector-react';
import { Form as UIForm } from '../../../ui';
import { model } from '../model';
import { BodyField } from './body-field';
import { DescriptionField } from './description-field';
import { TitleField } from './title-field';
import '../model/init';

export const Form: React.FC = () => {
  useGate(model.FormGate);

  return (
    <UIForm id="editor" onSubmit={model.formSubmitted}>
      <TitleField />
      <DescriptionField />
      <BodyField />
    </UIForm>
  );
};
