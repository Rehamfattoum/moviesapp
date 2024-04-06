import React from 'react'
import {useMovieContext} from './context/globalContext';
import * as actions from './context/actiontyps';


const MovieControls = ({movie,type}) => {
    const MoviesContext = useMovieContext();
  return (
    <div className='inner-card-controls'>
        {
            type === 'watchlist' && (
                <React.Fragment>
                    <button onClick={()=>MoviesContext.MoviesDispatch({
                        type: actions.ADD_MOVIE_TO_WATCHED,
                        payload:movie 
                    })  } className='ctrl-btn'>
                        <i className='fa-solid fa-eye'/>
                    </button>
                    <button onClick={()=>MoviesContext.MoviesDispatch({
                        type:actions.REMOVE_MOVIE_FROM_WATCHLIST,
                        payload:movie.imdbID
                    })  } className='ctrl-btn'>
                        <i className='fa-fw fa fa-times' />
                    </button>
                </React.Fragment>
            )
        }
         {
            type === 'watched' && (
                <React.Fragment>
                    <button onClick={()=>MoviesContext.MoviesDispatch({
                        type: actions.MOVE_TO_WATCHLIST,
                        payload: movie
                    })} className='ctrl-btn'>
                        <i className='fa-solid fa-eye-slash'/>
                    </button>
                    <button onClick={()=>MoviesContext.MoviesDispatch({
                        type: actions.REMOVE_MOVIE_FROM_WATCHED,
                        payload: movie.imdbID
                    })} className='ctrl-btn'>
                        <i className='fa-fw fa fa-times' />
                    </button>
                </React.Fragment>
            )
        }
    </div>
  )
}

export default MovieControls