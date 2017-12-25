import React, { Component } from 'react';
import logo from './logo.png';
import ProfilePage from './components/Profile/Profile.js';
import MyProfilePage from './components/Profile-Editable/Profile.js';
import ExchangePage from './components/Exchange/Exchange.js';
import PurchaseHistoryPage from './components/PurchaseHistory/PurchaseHistory.js';
import './App.css';

class FoodDescriptionPage extends Component {
  render() {
    return(
      <div className="Page">
        <div className="header">
          <button className="back">BACK</button>
          <button className="message">MSG OWNER</button>
        </div>
        <h1 className="App-title">Buy</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <div className="Food">
          <p>Food Name: $SELLER $RATING</p>
          <p>Selling: $FOOD_NAME</p>
          <p>Description: $DESC</p>
          <p>Price: $PRICE</p>
          <p>Dates: <div className="Timeline"><div className="Timeline-inner">|</div></div></p>
          <p>Meet @ $LOC</p>
        </div>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">

        <MyProfilePage/>

        <ProfilePage/>

        <ExchangePage />

        <PurchaseHistoryPage />

        <FoodDescriptionPage />
      </div>
    );
  }
}

export default App;
