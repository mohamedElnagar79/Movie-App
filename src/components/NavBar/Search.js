
import React from "react";
import { useEffect, useState } from "react";
import "./search.css"
import axios from "axios";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesSearch, setMoviesSearch] = useState([]);
  useEffect(() => {
    if (searchTerm) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?&api_key=db6d60b6f80485402b525858fc3a7e1f&query=${searchTerm}`
        )
        .then((res) => {
          setMoviesSearch(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchTerm]);
  const handleOneSubmit = (e) => {
    e.preventDefault();
  };
  const hanldeOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleOneSubmit}
        fixed="top"
        className="searchFrom"
      >
        <h1 className="top-head">Search For Movie</h1>
        <input
        
          placeholder="Search..."
          className="text-muted bg-dark search-input"
          type="search"
          value={searchTerm}
          onChange={hanldeOnChange}
        />

      </form>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-0">
        {moviesSearch.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MoviesCard movie={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
}