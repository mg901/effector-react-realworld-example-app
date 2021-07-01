import { Form as UIForm } from 'shared/ui';
import * as model from '../model/model';
import { BodyField } from './body-field';
import { DescriptionField } from './description-field';
import { TitleField } from './title-field';

export const Form: React.FC = () => (
  <UIForm id="editor" onSubmit={model.formSubmitted}>
    <TitleField />
    <DescriptionField />
    <BodyField />
  </UIForm>
);
