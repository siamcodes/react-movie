import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/signup">Signup</Link>
        </div>
    )
  }
}
export default Header;