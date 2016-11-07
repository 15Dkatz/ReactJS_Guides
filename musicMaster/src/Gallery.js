import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      playingUrl: '',
      audio: null
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
                <div className="track-play">
                  <div className="track-play-inner">
                    &#9654;
                  </div>
                </div>
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

  // figure this out!
  audio(previewUrl) {
    console.log('play', previewUrl);
    let audio = new Audio(previewUrl); // native js object
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playingUrl: previewUrl,
        audio: audio
      });
    } else {
      if (this.state.playingUrl === previewUrl) {
        this.state.audio.pause();
        this.setState({
          playing: false
        });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playingUrl: previewUrl,
          playing: true,
          audio: audio
        });
      }
    }

    // if playing do stop
    // if different url, stop the play, and start playing that one, and playing stays true
  }
}

export default Gallery;
