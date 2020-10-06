import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useGate, useStore } from 'effector-react';
import Markdown from 'markdown-to-jsx';
import { ArticleMeta } from '../../../modules/feed';
import { Container, Row, Page, TagList, Tag, Banner } from '../../../ui';
import { Comments } from '../comments';
import * as model from '../model';
import { EditMode } from './edit-mode';
import '../model/init';

type Props = Readonly<RouteConfigComponentProps<{ id: string }>>;

export const ArticlePage: React.FC<Props> = ({
  match: {
    params: { id },
  },
}) => {
  useGate(model.Gate, { id });

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
              <Comments id={id} />
            </Row>
          </Page>
        </div>
      )}
    </>
  );
};
