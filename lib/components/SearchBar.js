import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

const styles = {
  bar: {
  position: 'absolute',
  left: '1.5em',
  borderStyle: 'groove'
  }
};

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ''
  };
  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 400)
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value}, () => {
      this.doSearch();
    });
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('Updating SearchBar');
  }
  render() {
    return (
      <div style={styles.bar}>
      <h2>Search For an Article</h2>
      <input
        type="search"
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
      </div>
    );
  }
}

export default storeProvider()(SearchBar);
