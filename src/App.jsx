import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

const movie1 = {
  Title: "Superman, Spiderman or Batman",
  Year: "2011",
  imdbID: "tt2084949",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
};

const API_URL = "http://www.omdbapi.com?apikey=5b28781";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return (
    <div className="App">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for Movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster} alt={movie1.Title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
