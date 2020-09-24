/* eslint-disable react/no-danger */
import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate, useStore } from 'effector-react';
import marked from 'marked';
import { Container, Row, Page, ArticleMeta, TagList, Tag } from 'ui';
import { model } from '../model';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps>;

export const ArticlePage: React.FC<Props> = ({ match: { params } }) => {
  useGate(model.PageGate, { params });
  const { title, author, createdAt, body, tagList } = useStore(model.$article);

  const markup = {
    __html: marked(body, { sanitize: true }),
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
      </Page>
    </div>
  );
};
