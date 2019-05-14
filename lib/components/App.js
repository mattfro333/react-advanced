import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import NavBar from './NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { data } from '../testData';
//
// const api = new DataApi(data);

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
};

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  }
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  appState = () => {
    const {articles, searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  }
state = this.appState();
onStoreChange = () => {
  this.setState(this.appState);
}
componentDidMount() {
  this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  this.props.store.startClock();
}
componentWillUnmount() {
  this.props.store.unsubscribe(this.subscriptionId);
}

render() {
  let { articles, searchTerm } = this.state;
  const searchRE = new RegExp(searchTerm, 'i');
  if (searchTerm) {
    articles = pickBy(articles, (value) => {
      return value.title.match(searchRE)
      || value.body.match(searchRE);
    });
  }

  return (
    <div>
      <CssBaseline />
      <NavBar />
      <Timestamp />
      <SearchBar />
      <div style={styles.root}><ArticleList
        articles={articles}
      />
      </div>
    </div>
  );
}
}

export default App;
