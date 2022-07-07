import "../Movies/MoviesCard/movies.css"
import { useSelector } from "react-redux";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
function Favorites() {
  const favorites = useSelector((state) => state.fav.favorites);

  return (
    <div className="favorites text-white row row-cols-1 row-cols-md-4 g-0 ">
          {favorites?.map((movie) => {
          return(
            <div className="col">
              <div className="m-4">
            <MoviesCard movie={movie} favoriteValue={true} key={movie.id} />
            </div>
            </div>
          )})}
    </div>
  );
}
export default Favorites;
