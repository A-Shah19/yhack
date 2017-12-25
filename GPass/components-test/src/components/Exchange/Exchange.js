import React, { Component } from 'react';
import FoodItem from '../FoodItem/FoodItem.js';
import './Exchange.css';


class ExchangePage extends Component {
  render() {
    return(
      <div className="Page">
        <div className="header">
          <button className="back">BACK</button>
          <button className="sell">+</button>
        </div>
        <h1 className="App-title">Exchange</h1>
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>
    );
  }
}

export default ExchangePage;
