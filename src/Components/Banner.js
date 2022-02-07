import React, { useState, useEffect } from "react";
import axios from "./../axios";
import requests from "../requests";
import './Banner.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovies] = useState([]);

  useState(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        bavckgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie.poster_path})`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie.name}</h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h2 className="banner_description">
            {movie.overview}
        </h2>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
