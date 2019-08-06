import React from 'react';
import marked from 'marked';
import { ArticleMeta } from './ArticleMeta';
import { CommentContainer } from './CommentContainer';
import * as api from '../../api';

class Article extends React.Component {
  componentWillMount() {
    this.props.onLoad(
      Promise.all([
        api.articles.get(this.props.match.params.id),
        api.comments.forArticle(this.props.match.params.id),
      ]),
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.article) {
      return null;
    }

    const markup = {
      __html: marked(this.props.article.body, { sanitize: true }),
    };
    const canModify =
      this.props.currentUser &&
      this.props.currentUser.username === this.props.article.author.username;

    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{this.props.article.title}</h1>
            <ArticleMeta article={this.props.article} canModify={canModify} />
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div dangerouslySetInnerHTML={markup} />

              <ul className="tag-list">
                {this.props.article.tagList.map((tag) => {
                  return (
                    <li className="tag-default tag-pill tag-outline" key={tag}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <hr />

          <div className="article-actions" />

          <div className="row">
            <CommentContainer
              comments={this.props.comments || []}
              errors={this.props.commentErrors}
              slug={this.props.match.params.id}
              currentUser={this.props.currentUser}
            />
          </div>
        </div>
      </div>
    );
  }
}
