import "./movies.css";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFavorites, deleteFavorites } from "../../../Store/Actions/Favorites";


function MoviesCard({movie,favoriteValue}) {
    const placeholderImg = "https://image.tmdb.org/t/p/w1280"
    // console.log("movie :",movie)

    const dispatch = useDispatch();
    const [favs, setFavs] = useState(false);
    const toggleFav = (movieId) => {
    setFavs(!favs);
    if (!favs && !favoriteValue) {
      dispatch(addFavorites(movie));
    } else {
      dispatch(deleteFavorites(movieId));
    }
  };
  return (
    <>
      <div className="card h-100 w-100"  >
        <img src={placeholderImg+movie.backdrop_path} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">
            {movie.release_date}
          </p>
          
          <div
          className="fav-btn d-inline"
          onClick={() => {
            toggleFav(movie.id);
          }}
        >
          {favoriteValue ? (
            <AiFillHeart fontSize={35} color={"#dc353f"} />
          ) : favs ? (
            <AiFillHeart fontSize={35} color={"#dc353f"} />
          ) : (
            <AiOutlineHeart fontSize={35} color={"#dc353f"} />
          )}
          <Link to={`/movieDetails/${movie.id}`} style={{color:"black"}} className="link">Details ...</Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default MoviesCard
