import "./navStyle.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { setDataLanguage } from "../../Store/Actions/movies";
import { useDispatch } from "react-redux";
import axios from "axios";
import { LangContext } from "../../context/LanContext";

// import {  useState } from "react";

function NavComponent({ data, setData }) {
  const [search, setSearch] = useState("");
  const [originalData, setOriginalDat] = useState([]);
  const { language, setLanguage } = useContext(LangContext);
  const favorites = useSelector((state) => state.fav.favorites);
  const dispatch = useDispatch();

  const fetchData = () => {
    axios
      .get(
        `
        https://api.themoviedb.org/3/movie/popular?api_key=db6d60b6f80485402b525858fc3a7e1f&page=1&language=${language}`
      )
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    console.log("current:", language);
  }, [language]);

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="#">
            Elnagar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link navLink ">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link navLink">
                  Favorite
                  {favorites.length > 0 ? (
                    <span className="favLength">{favorites.length}</span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              <select
                onChange={(e) => {
                  dispatch(setDataLanguage(e.target.value));
                }}
              >
                <option defaultValue="en">en</option>
                <option value="fr">fr</option>
                <option value="ar">ar</option>
              </select>
              <Link to="/search" className="nav-link text-light mx-2 ">
                Search
              </Link>

              {/* <button
                className="btn btn-outline-primary bg-light search_btn"
                type="submit"
              >
               Log Out
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavComponent;
