import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick';


class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
      <Slider { ...settings }>
        <div><h3> Bread <img src= 
        "https://d2gk7xgygi98cy.cloudfront.net/6489-3-large.jpg" 
        alt="bread" width="30%" height="30%" align="center"/>
        </h3></div>
        <div><h3> Carrots <img src=
        "http://www.well-beingsecrets.com/wp-content/uploads/Carrots-Reduce-Inflammation.jpg" 
         alt="carrots" width="30%" height="30%" align="center"/> </h3></div>
        <div><h3>Eggs <img src=
        "http://thesrpskatimes.com/wp-content/uploads/2017/08/eggs.jpg" 
        alt="eggs" width="40%" height="40%" align="center"/></h3></div>
        <div><h3>Green Beans <img src= 
        "https://www.organicfacts.net/wp-content/uploads/greenbeans.jpg" alt="green beans"
        width="40%" height="40%" align="center"/>
        </h3></div>

      </Slider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SimpleSlider/>
      </div>
    );
  }
}

export default App;
