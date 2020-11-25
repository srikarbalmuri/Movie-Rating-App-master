import React, { Component } from 'react';
import {Form} from 'react-bootstrap'
import logo from './logo.svg';
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home'
import Movie from './components/moviesinfo/Movie'
import Login from './components/Login/Login.js'
const Route = require("react-router-dom").Route;



class App extends Component{
  render(){
    return(
      <div className = "App">
          <Router>
          <Route path = '/' exact strict component = {Home} />
            <Route path = '/movie' exact strict component = {Movie} />
            <Route path = '/login' exact strict component = {Login} />
          </Router>
          
      </div>
    )
  }
}
export default App;
