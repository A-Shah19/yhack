import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class ExchangePage extends Component {
  render() {
    return(
      <div className="Page">
        <h1 className="App-title">Exchange</h1>
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>
    );
  }
}

class PurchaseHistoryPage extends Component {
  render() {
    return(
      <div className="Page">
        <h1 className="App-title">Purchase History</h1>
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>
    );
  }
}

class FoodItem extends Component {
  render() {
    return(
      <div className="Food-item">

        <div className="Food-image">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="Food-info">
          <ul>
            <li>Food Name: $FOOD_NAME</li>
            <li>Food Price: $FOOD_PRICE</li>
            <li>Food seller: $FOOD_SELLER</li>
          </ul>
        </div>

      </div>
    );
  }
}

class Profile extends Component {
  render() {
    return(
      <div className="Page">

        <h1 className="App-title">Profile</h1>

        <div className="Profile-header">
          <div className="Profile-header-info">
            <h2 className="Username">$USERNAME</h2>  
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


class App extends Component {
  render() {
    return (
      <div className="App">

        <Profile/>

        <ExchangePage />

        <PurchaseHistoryPage />
      </div>
    );
  }
}

export default App;
