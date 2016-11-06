import React, { Component } from 'react';

class Profile extends Component {
  // will react prop-types handle errors?

  render() {
    let artist = this.props.artist !== '' ? this.props.artist : '';

    return (
      <div>
        <div>
          {artist.name}
        </div>
        <div>
          {artist.followers !== undefined ? `Followers: ${artist.followers.total}` : ''}
        </div>
      </div>
    )
  }
}

export default Profile;
