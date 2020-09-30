/* eslint-disable react/no-danger */
import React from 'react';
import { useGate, useStore } from 'effector-react';
import { Comments } from 'features/comments';
import { ArticleMeta } from 'features/feed';
import Markdown from 'markdown-to-jsx';
import { Container, Row, Page, TagList, Tag, Banner } from 'ui';
import { model } from '../model';
import { EditMode } from './edit-mode';

import '../model/init';

export const ArticlePage: React.FC = () => {
  useGate(model.PageGate);
  const { title, author, createdAt, body, tagList } = useStore(model.$article);
  const loading = useStore(model.fetchArticleFx.pending);

  return (
    <>
      {!loading && (
        <div className="article-page">
          <Banner>
            <Container>
              <h1>{title}</h1>
              <ArticleMeta author={author} createdAt={createdAt}>
                <EditMode />
              </ArticleMeta>
            </Container>
          </Banner>
          <Page>
            <Row className="article-content">
              <div className="col-xs-12">
                <Markdown>{body}</Markdown>
                <TagList>
                  {tagList.map((tag) => (
                    <Tag key={tag}>{tag.toLowerCase()}</Tag>
                  ))}
                </TagList>
              </div>
            </Row>
            <hr />
            <div className="article-actions" />
            <Row>
              <Comments />
            </Row>
          </Page>
        </div>
      )}
    </>
  );
};
