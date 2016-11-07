import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      albumPlaying: ''
    }
  }

  render() {
    let tracks = this.props.tracks !== undefined ? this.props.tracks : [];
    return (
      <div className="Gallery">
        {
          tracks.map((track, k) => {
            let trackImg = track.album.images[0].url;
            let previewUrl = track.preview_url;
            return (
              <div
                key={k}
                className="track"
                onClick={() => this.audio(previewUrl)}
              >
                {/*{track.name}*/}
                <img
                  src={trackImg}
                  className="track-img"
                  alt="track"
                />
                <p className="track-text">
                  {track.name}
                </p>
              </div>
            )
          })
        }
      </div>
    )
  }

  audio(previewUrl) {
    console.log('play', previewUrl);
    let audio = new Audio(previewUrl); // native js object
    audio.play();
  }
}

export default Gallery;
