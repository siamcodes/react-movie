import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    var Navbar = {
        backgroundColor: '#651fff',
        color: '#FFF',
        fontSize: 20,
        padding: 8 ,
    }

    return (
      <div style={{ display: 'inlineBlock', backgroundColor: '#7c4dff', padding: 10 }}>
        <Link to="/" style={Navbar}> Home </Link>
        <Link to="/about" style={Navbar}> About </Link>
        <Link to="/signin" style={Navbar}> Signin </Link>
        <Link to="/signup" style={Navbar}> Signup </Link>
      </div>
    )
  }
}
export default Header;