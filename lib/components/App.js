import React from 'react';

import ArticleList from './ArticleList';

// import { data } from '../testData';
//
// const api = new DataApi(data);

class App extends React.Component {
state = this.props.store.getState();
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
