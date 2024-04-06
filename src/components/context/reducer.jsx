import * as actions from "./actiontyps";
import watchlist from "../watchlist";
import Watched from "../watched";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => (
          movie.imdbID !== action.payload
        )),
      };
    case actions.MOVE_TO_WATCHLIST :
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watched: [action.payload, ...state.watched],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};



     
      
        
      

