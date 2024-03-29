import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  article: {
  position: 'relative',
  top: '5em',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '.5em',
    fontSize: '1.7em',
    display: 'flex',
    justifyContent: 'center',
  },
  date: {
    fontSize: '0.85em',
    color: '#888',
    display: 'flex',
    justifyContent: 'center',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    justifyContent: 'center',
  },

  body: {
    padding: '1em',
    alignText: 'center',
  }
};
const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Article = (props) => {
  const { article, store } = props;
  const author = store.lookupAuthor(article.authorId);
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>
        {dateDisplay(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
      <br />
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),

  };
}

export default storeProvider(extraProps)(Article);
