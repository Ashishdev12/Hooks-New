import React from 'react'

function movieReducer(state, action) {
    switch(action.type){
        case 'ADD NEW MOVIE':
            return[
                ...state,
                action.payload
            ]
        case 'DELETE':
            const newMovies = state.filter((item)=>item.id != action.payload)
            return newMovies
            default:
                return state
    }
  return state
}

export default movieReducer
