import React, {Component} from 'react';

import './App.css';
import {Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import Products from './Components/Products/Products';
import Movie from './Components/Movie/Movie';

class App extends Component {

  render () {
    return (
      <div>
        <Header />
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/products" component={Products} />
          <Route path="/movie" component={Movie} />
        <Footer />
      </div>
    );
  }
}

export default App;
