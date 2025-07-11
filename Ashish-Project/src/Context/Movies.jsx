import React from 'react'
import MovieList from './MovieList'
import { useMoviesCtx } from './ContextComponent'

function Movies() {
    const movies = useMoviesCtx()
  return (
    <div>
      <h3>Below are the latest Movies:</h3>
      
      <MovieList movies={movies}/>
    </div>
  )
}

export default Movies
