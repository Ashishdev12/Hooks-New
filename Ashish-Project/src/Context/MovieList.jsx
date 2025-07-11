import React from 'react'
import { useMoviesCtx } from './ContextComponent'

function MovieList() {
    const movies = useMoviesCtx()
  return (
    <div>
      {
        movies.map((item)=>{
            return <li key={item.id}>{item.name}</li>
        })
      }
    </div>
  )
}

export default MovieList
