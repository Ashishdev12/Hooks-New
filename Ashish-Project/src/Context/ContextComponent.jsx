import React, { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import './ContextComponet.css';
import movieReducer from "./Reducer/movieReducer";

const MovieCtx = createContext();

export const useMoviesCtx = () =>{
    return useContext(MovieCtx)
}

const initialState = [
  { id: 1, name: "Gaddar" },
  { id: 2, name: "King" },
  { id: 3, name: "Linon" },
  { id: 4, name: "Billa" },
  { id: 5, name: "Killa" },
]

function ContextProvider({ children }) {
    const [movies, dispatch] = useReducer(movieReducer,initialState);
  return (
    <MovieCtx.Provider value={{movies, dispatch}}>
    {children}
    </MovieCtx.Provider>
  )
}

export default ContextProvider;
