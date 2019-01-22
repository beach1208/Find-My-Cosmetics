import React, { Component } from 'react';
import logo from './makeup.svg';
import './App.css';
import FetchProduct from './components/FetchProduct';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title-name">Find My Cosmetics</h1>
          <SearchBar/>
          
        </header>
          <FetchProduct/>
      </div>
    );
  }
}

export default App;
