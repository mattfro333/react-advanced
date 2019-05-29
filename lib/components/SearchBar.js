import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

const styles = {
  bar: {
  position: 'absolute',
  left: '480px',
  top: '2.6em'
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
