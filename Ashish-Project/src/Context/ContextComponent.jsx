import React, { useContext } from "react";
import { createContext } from "react";

const MovieCtx = createContext();

export const useMoviesCtx = () =>{
    return useContext(MovieCtx)
}

function ContextProvider({ children }) {
    const movies = [
  { id: 1, name: "Gaddar" },
  { id: 2, name: "King" },
  { id: 3, name: "Linon" },
  { id: 4, name: "Billa" },
  { id: 5, name: "Billa" },
];
  return (
    <MovieCtx.Provider value={movies}>
    {children}
    </MovieCtx.Provider>
  )
}

export default ContextProvider;
