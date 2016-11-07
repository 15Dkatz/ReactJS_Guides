import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  // will react prop-types handle errors?

  render() {
    let artist = this.props.artist !== [] ? this.props.artist : [];
    let name = artist.name;
    let followers = artist.followers !== undefined ? `${artist.followers.total} followers` : ''
    let profile = artist.images[0] !== undefined ? artist.images[0].url : '';
    let genres = artist.genres !== undefined ? artist.genres : [];

    return (
      <div className="profile">
        <img
          src={profile}
          alt="profile"
          className="profile-img"
        />
        <div className="profile-info">
          <div className="profile-name">
            {name}
          </div>
          <div className="profile-followers">
            {followers}
          </div>
          <div className="profile-genres">
            Known for:
            {
              genres.map((genre, k) => {
                genre = genre !== genres[genres.length-1] ? ` ${genre},` : ` & ${genre}`;
                return (
                  <span key={k}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
