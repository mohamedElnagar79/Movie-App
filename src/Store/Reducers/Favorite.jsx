const INITIAL_STATE = {
    favorites: [],
  };
  
  export default function favoritesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "ADD_fAVORITES":
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case "DELETE_FAVORITES":
        const filteredArr = state.favorites.filter(
          (fav) => fav.id !== action.payload
        );
        return {
          ...state,
          favorites: filteredArr,
        };
  
      default:
        return state;
    }
  }