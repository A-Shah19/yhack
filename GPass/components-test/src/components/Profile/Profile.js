import React, { Component } from 'react';
import logo from '../../logo.png';
import './Profile.css';

class Profile extends Component {
  render() {
    return(
      <div className="Page">
        <div className="header">
          <button className="back">BACK</button>
        </div>

        <div className="Profile-header">
          <div className="Profile-header-info">
            <h2 className="Username">$USER</h2>  
            <h3 className="Rating">$RATING/5 stars</h3>  
          </div>
          <div className="Profile-image">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
 
        <div className="Profile-info">
          <p>Meeting locations: $LOCATION</p>
          <p>Currently selling: $SELLING_CURR</p>
          <p>Most sold items: $MOST_SOLD</p>
          <p>Favorite recipe: $FUN_FACT</p>
        </div>
      </div>
    );
  }
}

export default Profile;
