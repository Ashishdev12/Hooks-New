import React from "react";
import { useMoviesCtx } from "./ContextComponent";


function MovieList() {
  const { movies, dispatch } = useMoviesCtx();
  
  const handleDelete = (id) =>{
    //  const newMovies =  movies.filter((item)=>{
    //     return item.id != id
    //   }
    // )
    // setMovies(newMovies)
    dispatch({type:'DELETE', payload: id })
  }
  return (
    <div>
      {movies.map((item) => {
        return (
          <li key={item.id}>
            {item.name} 
            <button onClick={()=>handleDelete(item.id)}style={{ margin: "10px" }}>X</button>
          </li>
        );
      })}
    </div>
  );
}

export default MovieList;
