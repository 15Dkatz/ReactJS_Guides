import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  // will react prop-types handle errors?

  render() {
    let artist = this.props.artist !== [] ? this.props.artist : [];
    let name = artist.name;
    let followers = artist.followers !== undefined ? `${artist.followers.total} followers` : ''
    let profile = artist.images !== undefined ? artist.images[0].url : '';

    return (
      <div>
        <img
          src={profile}
          className="profile-img"
          alt="profile"
        />
        <div className="profile-name">
          {name}
        </div>
        <div className="profile-followers">
          {followers}
        </div>
      </div>
    )
  }
}

export default Profile;
