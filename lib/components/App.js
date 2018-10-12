import React from 'react';

import ArticleList from './ArticleList';

import DataApi from '../state-api/lib/index';
import { data } from '../testData';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
    // console.log(this.state);
  }
  // lookupAuthor
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
