import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">
          MusicMaster
        </div>
        <SearchBar />
      </div>
    )
  }
}

export default App;
