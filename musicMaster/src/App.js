import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './App.css';

import Profile from './Profile';
import Gallery from './Gallery';

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
        {
          this.state.artist.length !== 0 ?
            <Profile artist={this.state.artist}/> :
            <div></div>
        }
        <Gallery tracks={this.state.tracks}/>
      </div>
    )
  }


  search() {
    console.log('query', this.state.query);

    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

    const ALBUM_URL = 'https://api.spotify.com/v1/artists';

    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      let artist = responseJSON.artists.items[0];
      console.log('artist', artist);
      this.setState({artist});

      FETCH_URL = `${ALBUM_URL}/${artist.id}/top-tracks?country=US&`;
      fetch(FETCH_URL, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        let tracks = responseJSON.tracks;
        console.log('tracks', tracks);
        this.setState({tracks});
      })
    })
  }
}

export default App;
