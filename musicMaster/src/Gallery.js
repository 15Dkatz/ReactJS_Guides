import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let tracks = this.props.tracks !== undefined ? this.props.tracks : [];

    return (
      <div className="Gallery">
        {
          tracks.map((track, k) => {
            return (
              <div key={k}>
                {track.name}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;
