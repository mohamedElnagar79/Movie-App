import { useEffect, useState,useContext } from "react";
import "./MoviesStyle.css";
import MoviesCard from "./MoviesCard/MoviesCard"
import { useDispatch,useSelector } from "react-redux";
import {getMovies} from "../../Store/Actions/movies";
import {LangContext} from "../../context/LanContext";


function Movies({ setData }) {
  const value = useContext(LangContext);

  const {movies} = useSelector((state)=>state.movies)
   const dispatch =  useDispatch()
   useEffect(() => {
      dispatch(getMovies())
  },[]);

  return (
    < >
      <div class="row row-cols-1 row-cols-md-4 g-0 ">
        { 
          movies.map(movie=>{
            return (
              <div className="col" key={movie.id}>
                <div className="m-4">
                <MoviesCard movie={movie}/>
                </div>
                
              </div> 
            )
          })
        }
        
      </div>
    </>
  );
}

export default Movies;
