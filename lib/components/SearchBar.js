import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

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
      <div>
      <input
        type="search"
        placeholder="Enter Search"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
      </div>
    );
  }
}

export default storeProvider()(SearchBar);
