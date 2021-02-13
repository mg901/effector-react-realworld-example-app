import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate } from 'effector-react';
import { Page, Row } from 'ui';
import { AddTag } from './add-tag';
import { Gate } from './model';
import { Errors } from './ui/errors';
import { Form } from './ui/form';
import { SubmitButton } from './ui/submit-button';
import { TagList } from './ui/tag-list';

type Props = Readonly<RouteConfigComponentProps<{ slug: string }>>;

export const EditorPage: React.FC<Props> = ({
  match: {
    params: { slug },
  },
}) => {
  useGate(Gate, { slug });

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
