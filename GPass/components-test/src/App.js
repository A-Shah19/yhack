import React, { Component } from 'react';
import ProfilePage from './components/Profile/Profile.js';
import MyProfilePage from './components/Profile-Editable/Profile.js';
import ExchangePage from './components/Exchange/Exchange.js';
import PurchaseHistoryPage from './components/PurchaseHistory/PurchaseHistory.js';
import FoodDescriptionPage from './components/FoodDescription/FoodDescription.js';
import './App.css';


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
