import { RouteConfigComponentProps } from 'react-router-config';
import { useGate, useStore } from 'effector-react';
import Markdown from 'markdown-to-jsx';
import { ArticleMeta } from 'shared/feed';
import { Container, Row, Page, TagList, Tag, Banner } from 'ui';
import { Comments } from './comments';
import * as model from './model';
import { EditMode } from './ui/edit-mode';

type Props = Readonly<RouteConfigComponentProps<{ slug: string }>>;

export const ArticlePage: React.FC<Props> = ({
  match: {
    params: { slug: id },
  },
}) => {
  useGate(model.Gate, { slug: id });

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
              <Comments slug={id} />
              <div />
            </Row>
          </Page>
        </div>
      )}
    </>
  );
};
