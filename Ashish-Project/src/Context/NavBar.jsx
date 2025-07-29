import React from 'react'
import { useMoviesCtx } from './ContextComponent'

function NavBar() {
    const {movies} = useMoviesCtx()
  return (
    <nav>
      <h1>PVR</h1>
      <h2>Movies Count: {movies.length}</h2>
    </nav>
  )
}

export default NavBar
