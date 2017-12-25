import React, { Component } from 'react';
import FoodItem from '../FoodItem/FoodItem.js';
import './PurchaseHistory.css';


class PurchaseHistoryPage extends Component {
  render() {
    return(
      <div className="Page">
        <div className="header"><button className="back">BACK</button></div>
        <h1 className="App-title">Purchase History</h1>
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>
    );
  }
}

export default PurchaseHistoryPage;
