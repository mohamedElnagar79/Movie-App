import { combineReducers } from "redux";
import favoriteReducer from "./Favorite"

export default combineReducers({
   fav:favoriteReducer
})