import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    const { searchFn } = this.props;

    searchFn(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
