import { useEffect, useState } from "react";
import "./MoviesStyle.css";
import axios from "axios";
import MoviesCard from "./MoviesCard/MoviesCard"

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?",
        {
          params: {
            api_key: "db6d60b6f80485402b525858fc3a7e1f",
          },
        }
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log("err ", err));
  });

  return (
    <>
      
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
