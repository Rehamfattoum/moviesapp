import React from "react";
import './resultcard.css'
import WatchList from './watchlist';
import {useMovieContext} from "./context/globalContext"
import { type } from "@testing-library/user-event/dist/type";
import { ADD_MOVIE_TO_WATCHED } from './context/actiontyps';
import * as actions from "./context/actiontyps";

const ResultCard = ({ movie }) => {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.watchlist.find(
    (o) => o.imdbID === movie.imdbID 
  );
  const storedMovieWatched = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID 
  );

  const WatchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
  const WatchedDisabled = storedMovieWatched ? true : false ;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {" "}
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filler-poster"> </div>
        )}{" "}
      </div>
      <div className="info" >
        <div className="heading" >
            <h3 className="title" > {movie.Title} </h3>
            {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-" }
        </div>
        <div className="controls">
        <button className="btn" onClick={()=> MovieContext.MoviesDispatch(
          { type: actions.ADD_MOVIE_TO_WATCHLIST, payload: movie,   }
        ) } disabled={WatchlistDisabled} > Add to WatchList </button>
        <button className="btn" onClick={()=> MovieContext.MoviesDispatch({
          type: actions.ADD_MOVIE_TO_WATCHED , payload:movie ,
        }) } disabled={WatchedDisabled} > Add to Watched </button>
        </div>
     </div>
    </div>
  );
};

export default ResultCard;
