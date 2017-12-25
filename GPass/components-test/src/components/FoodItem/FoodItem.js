import React, { Component } from 'react';
import logo from '../../logo.png';
import './FoodItem.css';

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

export default FoodItem;
