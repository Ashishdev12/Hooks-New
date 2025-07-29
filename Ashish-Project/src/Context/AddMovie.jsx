import React, { useContext, useState } from 'react'
import { useMoviesCtx } from './ContextComponent';
// import { type } from 'os';

function AddMovie() {
  const [movieText, setMovieText] = useState('')

  const {dispatch} = useMoviesCtx()

  const handleClick = () =>{
    // dispatch(prevMoves=>{
    //   return [
    //     ...prevMoves,
    //     {id:Date.now(), name: movieText}
    //   ]
    // })
    dispatch({type: 'ADD NEW MOVIE', payload: {id:Date.now(), name: movieText}})
    setMovieText('')
  }
  return (
    <div>
      <input type="text" value={movieText} onChange={(e)=>setMovieText(e.target.value)}/> 
      <button style={{backgroundColor: 'orange', padding: "6px", border: 'none', borderRadius: '3px' }}onClick={handleClick}>Add Movies</button> 
    </div>
  )
}

export default AddMovie;
