import NavComponent from "./components/NavBar/NavComponent";
import Favorites from "./components/Favorites/Favorites";
import Movies from "./components/Movies/Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import MoviesDetails from "./components/Movies/MoviesDetails/MoviesDetails"
import Search from "./components/NavBar/Search"
// import { useSelector } from "react-redux";


function App() {
  // const fav = useSelector((state) => state.fav.currentFavorites);
  // console.log(fav)
  return (
    <>
      <Router>
      <NavComponent />
        <Switch>
          <Route path="/" exact component={Movies} />
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
