import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './App.css';

import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: []
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
              onKeyPress={event => {event.key === 'Enter' ? this.search() : console.log()}}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Profile artist={this.state.artist}/>
      </div>
    )
  }


  search() {
    console.log('query', this.state.query);

    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      let artist = responseJSON.artists.items[0];
      console.log('artist', artist);
      this.setState({artist})
    })
  }
}

export default App;
