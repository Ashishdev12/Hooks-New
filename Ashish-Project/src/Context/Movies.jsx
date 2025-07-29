import React from 'react'
import MovieList from './MovieList'
import { useMoviesCtx } from './ContextComponent'
import AddMovie from './AddMovie'

function Movies() {
    const movies = useMoviesCtx()
  return (
    <div>
      <h3>Below are the latest Movies:</h3>
      
      <MovieList movies={movies}/>
      <AddMovie/>
    
    </div>
  )
}

export default Movies
