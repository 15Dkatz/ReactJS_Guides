import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let tracks = this.props.tracks !== undefined ? this.props.tracks : [];

    return (
      <div className="Gallery">
        {
          tracks.map((track, k) => {
            let trackImg = track.album.images[0].url;
            return (
              <div key={k} className="track">
                {/*{track.name}*/}
                <img
                  src={trackImg}
                  className="track-img"
                  alt="track"
                />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;
