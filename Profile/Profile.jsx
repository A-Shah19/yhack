import "./Profile.css";
import React from "react";
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Bread from '../Food/Bread/Bread.js';
import Eggs from '../Food/Eggs/Eggs.js';
 
//var Router = require('react-router').Router
//var Route = require('react-router').Route
//var Switch = require('react-router').Switch
//var Link = require('react-router').Link

function template() {
  return (
    <div className="profile-sell">
	<h1><img src={require("./IMG_4259.JPG")} alt="Omar's Profile pic"/>  <br /> <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Omar Q. </h1>
	<BrowserRouter>
            <div className="container">
            <ul>
		<li>Meeting locations:</li>
                <p>Pierson Courtyard</p>
		<li>&nbsp;</li>
		<li>Selling:</li>
		<p><Link to="/components/Food/Bread">Bread</Link>, <Link to="/components/Food/Eggs">Eggs</Link></p>
		<li>&nbsp;</li>      
		<li>Most sold items:</li>
		<p>Bread, Spices, Mac & Cheese </p>
		<li>&nbsp;</li>
		<li>Favorite recipe:</li>
		<p>Filet Mignon</p>
            </ul>
              <Switch>
                <Route path="/components/Food/Bread" component={Bread}/>
                <Route path="/components/Food/Eggs" component={Eggs}/>
              </Switch>
            </div>
        </BrowserRouter>
    </div>
  );
};

export default template;
