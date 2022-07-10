import { combineReducers } from "redux";
import favoriteReducer from "./Favorite";
import moviesReducer from "./Movies"


export default combineReducers({
   fav:favoriteReducer,
   movies: moviesReducer,
})