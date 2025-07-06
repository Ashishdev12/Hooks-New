import React, { useState } from 'react'
import './Component.css'
import useCounter from './useCounter'
import useLocalStorage from './LocalStorage'


function ComponentA() {
  const [count, setValue] = useLocalStorage('count', 0)
   

  return (
  
         <div className='counter'>
        <h2>ComponentA</h2>
        <button onClick={()=>setValue(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={()=>setValue(count - 1)}>-</button>
    </div>
   
  )
}

export default ComponentA
