import React, {Component} from 'react';

import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

class App extends Component {
  render(){
  return (
    <div>
        <Header />
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        <Footer />
    </div>
  );
  }
}

export default App;
