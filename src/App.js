import React, { useRef, useEffect } from "react";
import './App.css';
import Header from './components/Main/Header';
import Section from './components/Section';
import Footer from './components/Main/Footer';
import Signup from './components/User/Signup';
import Login from './components/User/Login';
import Logout from './components/User/Logout';
import Accessibility from './components/User/Accessibility';
import Services from './components/User/Services';
import TelaErro from './components/Error/erro';
import TravelRio from './components/Traveller/TravelRio';
import TravelOrlando from './components/Traveller/TravelOrlando';
import TravelMoscou from './components/Traveller/TravelMoscou';
import TravelParis from './components/Traveller/TravelParis';
import TravelCaribe from './components/Traveller/TravelCaribe';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default() => {

    return (
    <div className="page">
      <Header />

      <Router>
        <Switch>
          <Route path="/" exact component={Section} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/accessibility" component={Accessibility} />
          <Route path="/services" component={Services} />
          <Route path="/travelSearchRio" exact component={TravelRio} />
          <Route path="/travelSearchMoscou" exact component={TravelMoscou} />
          <Route path="/travelSearchOrlando" exact component={TravelOrlando} />
          <Route path="/travelSearchParis" exact component={TravelParis} />
          <Route path="/travelSearchCaribe" exact component={TravelCaribe} />
          <Route path="/erro" component={TelaErro} />
        </Switch>
      </Router>

      <Footer />  
    </div>
  )
}
