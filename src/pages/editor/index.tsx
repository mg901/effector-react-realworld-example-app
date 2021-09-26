import { Page, Row } from 'shared/ui';
import { ErrorList } from 'widgets/error-list';
import { EditorForm } from './ui';

const EditorPage: React.FC = () => {
  return (
    <Page>
      <Row>
        <div className="col-md-10 offset-md-1 col-xs-12">
          <ErrorList />
          <EditorForm />
        </div>
      </Row>
    </Page>
  );
};

export default EditorPage;
