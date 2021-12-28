import { Page, Row } from '@/shared/ui';
import { EditorForm, Error } from './ui';

const EditorPage = () => {
  return (
    <Page>
      <Row>
        <div className="col-md-10 offset-md-1 col-xs-12">
          <Error />
          <EditorForm />
        </div>
      </Row>
    </Page>
  );
};

export default EditorPage;
