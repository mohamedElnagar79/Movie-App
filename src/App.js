import { useState, useEffect, } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getMovies } from "./Store/Actions/movies";
import NavComponent from "./components/NavBar/NavComponent";
import Favorites from "./components/Favorites/Favorites";
import Movies from "./components/Movies/Movies";
import NotFound from "./components/NotFound/NotFound";
import MoviesDetails from "./components/Movies/MoviesDetails/MoviesDetails"
import Search from "./components/NavBar/Search";


// import { useSelector } from "react-redux";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=db6d60b6f80485402b525858fc3a7e1f";
function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("data:", data);
  }, []);
  // const fav = useSelector((state) => state.fav.currentFavorites);
  // console.log(fav)
  return (
    <>
      <Router>
      <NavComponent   data={movies} setData={setData}/>
        <Switch>
          <Route path="/" exact
           component={()=> <Movies data={movies} setData={setData} />} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/movieDetails/:id" component={MoviesDetails}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="*" exact component={NotFound}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
