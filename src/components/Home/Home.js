import React, { Component } from "react";
import "./Home.css";
import Axios from "axios";
import MovieItem from "./MovieItem";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [] };
  }

  componentDidMount() {
    this.search('War')
  }

  search = keyword => {
    //console.log(keyword);
    var dataArray = [];
    var url =
      "https://api.themoviedb.org/3/search/movie?api_key={419875388bdcc1d8eb3fed6f780a546a}&query=" +
      keyword;
    Axios.get(url).then(result => {
      //console.log(JSON.stringify(result.data.results));
      result.data.results.forEach(item => {
        item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path;
        dataArray.push(item);
      });

      this.setState({ rows: dataArray });
    });
  };

  render() {
    return (
      <div>
        Welcome to Website
        <input style={{ fontSize: 24, display: "block", width: "90%", padding: 10 }}
          placeholder="Enter keywords movie?"
          onChange={(event) => {
            this.search(event.target.value);
          }}
        />

        {this.state.rows.map(item => (
          <MovieItem movie={item} />
        ))}
      </div>
    );
  }
}
export default Home;
