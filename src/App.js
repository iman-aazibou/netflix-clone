import React from "react";
import "./App.css";
import Row from "./Components/Row";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS" isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action " fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
