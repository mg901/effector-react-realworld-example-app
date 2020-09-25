/* eslint-disable react/no-danger */
import React from 'react';
import { useGate, useStore } from 'effector-react';
import { Form } from 'features/comments/ui/form';
import 'features/comments/model/init';
import marked from 'marked';
import { Container, Row, Page, ArticleMeta, TagList, Tag } from 'ui';
import { model } from '../model';
import '../model/init';

export const ArticlePage: React.FC = () => {
  useGate(model.PageGate);
  const { title, author, createdAt, body, tagList } = useStore(model.$article);

  const markup = {
    __html: marked(body),
  };

  return (
    <div className="article-page">
      <div className="banner">
        <Container>
          <h1>{title}</h1>
          <ArticleMeta author={author} createdAt={createdAt} />
        </Container>
      </div>
      <Page>
        <Row className="article-content">
          <div className="col-xs-12">
            <div dangerouslySetInnerHTML={markup} />
            <TagList>
              {tagList.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </div>
        </Row>
        <hr />
        <Row>
          <div className="col-xs-12 col-md-8 offset-md-2">
            <Form />
          </div>
        </Row>
      </Page>
    </div>
  );
};
