import { useParams } from 'react-router-dom';
import { useGate } from 'effector-react';
import { Page, Row } from 'shared/ui';
import { AddTag } from './add-tag';
import { model } from './model';
import { Errors, Form, SubmitButton, TagList } from './ui';

type Params = Readonly<{
  slug: string;
}>;

const Editor: React.FC = () => {
  const params = useParams<Params>();
  useGate(model.Gate, params);

  return (
    <Page>
      <Row>
        <div className="col-md-10 offset-md-1 col-xs-12">
          <Errors />
          <Form />
          <AddTag />
          <TagList />
          <SubmitButton />
        </div>
      </Row>
    </Page>
  );
};

export default Editor;
