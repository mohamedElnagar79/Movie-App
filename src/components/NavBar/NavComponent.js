// import { Link } from "react-router-dom";
import "./navStyle.css";
import { useSelector } from "react-redux";

// import {  useState } from "react";

import { Link } from "react-router-dom";

function NavComponent() {
  const favorites = useSelector((state) => state.fav.favorites);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
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
                  {favorites.length > 0 ?<span className="favLength">{favorites.length}</span>:""}
                  
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
               <Link to="/search" className="nav-link text-light mx-2 ">Search</Link>
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
