import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
 
    return (
      <div className="navbar">
        <Link to="/" className="navlink"> Home </Link>
        <Link to="/about" className="navlink"> About </Link>
        <Link to="/categories" className="navlink"> Categories </Link>
        <Link to="/movie" className="navlink"> Movie </Link>
        <Link to="/products" className="navlink"> Products </Link> 
        <Link to="/product" className="navlink"> Product </Link> 
        <Link to="/news" className="navlink"> News </Link> 
        <Link to="/signin" className="navlink" style={{float: 'right'}}> Signin </Link>
        <Link to="/signup" className="navlink" style={{float: 'right'}}> Signup </Link>
        <Link to="/profile" className="navlink" style={{float: 'right' }}> Profile </Link>
      </div>
    )
  }
}

export default Header;