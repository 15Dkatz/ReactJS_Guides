import React, { Component } from 'react';
// import SearchBar from './SearchBar';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          MusicMaster
        </div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {event.key === 'Enter' ? this.search() : console.log(event.key)}}
            />
            <InputGroup.Addon
              onClick={() => this.search()}

            >
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }


  search() {
    console.log('query', this.state.query);
  }
}

export default App;
