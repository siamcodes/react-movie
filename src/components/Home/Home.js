import React, { Component } from "react";
import "./Home.css";
import Movie from "../Movie/Movie";
import Slide from "../Slide/Slide";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to website</h2>
        <Slide />
        <Movie />
      </div>
    );
  }
}
export default Home;
