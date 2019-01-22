import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state = { term: ''}
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

  render() {
    return (
      <div className="search">
      <input className="search-bar" type="text" placeholder="Search" onChange={event => this.onInputChange(event.target.value)}/> 
      </div>
    );
  }
}

export default SearchBar;