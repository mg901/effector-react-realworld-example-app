import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import * as agent from '../../agent';
import { DELETE_ARTICLE } from '../../constants/actionTypes';

const mapDispatchToProps = (dispatch) => ({
  onClickDelete: (payload) => dispatch({ type: DELETE_ARTICLE, payload }),
});

const ArticleActions = ({ article, onClickDelete, canModify }) => {
  const del = () => {
    onClickDelete(agent.articles.del(article.slug));
  };

  if (canModify) {
    return (
      <span>
        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit" />
          Edit Article
        </Link>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={del}>
          <i className="ion-trash-a" />
          Delete Article
        </button>
      </span>
    );
  }

  return <span />;
};

export default connect(
  () => ({}),
  mapDispatchToProps,
)(ArticleActions);
