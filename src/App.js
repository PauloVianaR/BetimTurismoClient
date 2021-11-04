import React, { useRef, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Signup from './components/User/Signup';
import Login from './components/User/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default() => {

    return (
    <div className="page">
      <Header />

      <Router>
        <Switch>
          <Route path="/" exact component={Section} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>

      <Footer />  
    </div>
  )
}
